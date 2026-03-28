'use client';

import { useEffect, useRef } from 'react';

interface Props {
  message: string | null;
  isLoading: boolean;
  isFinalRoast?: boolean;
}

export default function TLEConsole({ message, isLoading, isFinalRoast = false }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message, isLoading]);

  return (
    <div className="flex flex-col bg-black border-t border-gray-700" style={{ height: '280px' }}>
      {/* Console header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-700 shrink-0">
        <span className="text-green-400 text-xs font-bold font-mono">Leetbot</span>
        <span className="text-gray-500 text-xs font-mono">// Console</span>
        <span className="ml-auto inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>

      {/* Console body */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {isLoading ? (
          <div className="flex items-center gap-2 text-yellow-400">
            <span className="animate-spin">⟳</span>
            <span className="animate-pulse">Analyzing your disaster...</span>
          </div>
        ) : message ? (
          <div className={`leading-relaxed ${isFinalRoast ? 'text-red-400' : 'text-gray-300'}`}>
            <span className={`${isFinalRoast ? 'text-red-500' : 'text-green-400'} font-bold`}>
              Leetbot &gt;{' '}
            </span>
            {message}
          </div>
        ) : (
          <div className="text-gray-600">
            <span className="text-green-700">&gt; </span>
            Waiting for your next mistake...
            <span className="inline-block w-2 h-4 bg-gray-600 ml-1 animate-pulse align-middle" />
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
