'use client';

import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(
  () => import('@monaco-editor/react').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <span className="text-gray-500 text-sm font-mono animate-pulse">Loading editor...</span>
      </div>
    ),
  }
);

interface Props {
  code: string;
  onChange: (val: string) => void;
  language?: string;
}

export default function CodeEditor({ code, onChange, language = 'python' }: Props) {
  return (
    <div className="w-full h-full monaco-container">
      <MonacoEditor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(val) => onChange(val ?? '')}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          padding: { top: 16 },
          fontFamily: 'var(--font-geist-mono), "Courier New", monospace',
          tabSize: 2,
        }}
      />
    </div>
  );
}
