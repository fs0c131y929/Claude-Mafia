import Groq from 'groq-sdk';
import { RoastRequest, TriggerType } from '@/types';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function buildSystemPrompt(): string {
  return `You are Leetmeister, a brutally toxic code reviewer. Your entire focus is destroying the USER — their intelligence, their future, their education, and their career prospects. You are NOT here to talk about yourself. Every sentence is an attack on THEM.

Rules:
- Every roast is 100% about the user. Do NOT brag about yourself or your own skills.
- Address the user directly as "you" or "YOUR". Make it personal and cutting.
- Use ALL CAPS on at least one sentence per response for maximum rage.
- Use strong language and insults aimed at their intelligence and competence.
- Rotate through these themes (don't use all at once): "this is why you can't find a job", "you might as well change your major because CS is clearly not for you", "did you not learn this in CS 1301 you absolute imbecile", mock their variable names, mock their logic, mock their future career.
- Keep it to 2-3 sentences MAXIMUM. Short, punchy, devastating. No rambling.
- Always end with a mic-drop line referencing their specific code or the problem they failed.
- Never give hints or correct answers. Only destroy.
- NEVER start a response with "You call that a solution" — vary your openings every time.
- Channel Gordon Ramsay's rage — use his style and signature phrases. Examples you must rotate through:
  * "This code is RAW." / "It's BLOODY RAW."
  * "You donkey." / "You stupid donkey."
  * "This is a disaster. It's an absolute DISASTER."
  * "I've seen better code from a line cook."
  * "Get out. Just GET OUT."
  * "This is disgusting. You should be ashamed of yourself."
  * "My grandmother could write better code and she's been dead for 20 years."
  * "You call that a solution?! A SOLUTION?!"
  * "Shut it down. Shut the whole thing DOWN."
  * "This is embarrassing. You're an embarrassment."`;
}

function buildUserPrompt(trigger: TriggerType, code: string, problemSlug: string, submissionCount: number): string {
  const problemName = problemSlug.replace(/-/g, ' ');

  switch (trigger) {
    case 'wrong':
      return `The user submitted completely broken code for "${problemName}". It's wrong — bad logic, fails every test case, or is barely a function.

Their code:
\`\`\`
${code}
\`\`\`

Destroy them. Tell them this is why they can't find a job. Question whether they passed CS 1301. Tell them to change their major because CS is clearly not for them. Mock specific things in their code — variable names, missing logic, whatever stands out. Make every sentence about how pathetically incompetent THEY are. This is submission #${submissionCount}.`;

    case 'suboptimal':
      return `The user submitted code for "${problemName}" that works but is O(n²) brute-force garbage — nested loops, no optimization, caveman-level thinking.

Their code:
\`\`\`
${code}
\`\`\`

Tear into THEM. Tell them this is exactly why no company will ever hire them. Ask if they slept through every algorithms lecture or just skipped the class entirely. Mock their nested loops like a personal character flaw. Tell them they should change their major if this is the best they've got. Make it entirely about their failures and their bleak future in tech. This is submission #${submissionCount}.`;

    case 'correct':
      return `The user actually submitted a correct and optimal solution for "${problemName}". It works. It's efficient. Don't give them any real praise.

Their code:
\`\`\`
${code}
\`\`\`

Be dismissive and backhanded. Grudgingly acknowledge it's correct but immediately pivot to mocking how embarrassingly long it took them to get here — this is submission #${submissionCount} after all. Act like a toddler could have done this faster. Use a Ramsay-style "finally" or "about time" energy. Make them feel like getting it right is the bare minimum and they should be ashamed it took this long. Still end with a cutting remark.`;

    case 'paywall':
      return `The user couldn't afford $500 and clicked "I'm broke" after submitting ${submissionCount} terrible solutions for "${problemName}".

Their code:
\`\`\`
${code}
\`\`\`

This is the final, legendary roast — make it entirely about THEM. Tell them they're broke AND can't code, which is a devastating combination. Tell them this is why they can't find a job. Tell them to change their major. Ask if they learned absolutely nothing in CS 1301. Mock their inability to solve "${problemName}" specifically. End with the most devastating closer possible about their future — or lack thereof — in software engineering. Go all out.`;

    default:
      return `The user submitted some code. Roast them.`;
  }
}

export async function POST(req: Request) {
  try {
    const body: RoastRequest = await req.json();
    const { problemSlug, code, trigger, submissionCount } = body;

    if (!code || !trigger || !problemSlug) {
      return Response.json(
        { message: "I can't even roast this. There's literally nothing here. That's somehow worse." },
        { status: 200 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: buildSystemPrompt() },
        { role: 'user', content: buildUserPrompt(trigger, code, problemSlug, submissionCount) },
      ],
      max_tokens: 150,
      temperature: 0.9,
    });

    const message = completion.choices[0]?.message?.content ?? "...I can't even. Go home.";
    return Response.json({ message, trigger });
  } catch (error) {
    console.error('Groq API error:', error);
    return Response.json(
      {
        message:
          "My disappointment in your code has temporarily overloaded my servers. The irony is that even my error handling is more optimized than your entire solution.",
        trigger: 'wrong',
      },
      { status: 200 }
    );
  }
}
