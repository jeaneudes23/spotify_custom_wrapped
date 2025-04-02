import React from 'react'

export default function PreviewJson<T>({ data }: { data: T }) {
  return (
    <pre  className=' break-all text-wrap'>{JSON.stringify(data, null, 2)}</pre>
  );
}
