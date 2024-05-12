import { useMemo, useState } from 'react';
import { IData } from '../types';

interface Props {
  rows: IData[];
  title: string;
}

export default function CustomTable({ rows, title }: Props) {
  const [selected, setSelected] = useState<keyof (typeof rows)[0]>('title');
  const [sort, setSort] = useState(false);
  const sorted = useMemo(() => [...rows].sort(sortRows), [rows, selected, sort]);
  const head = useMemo<Array<keyof (typeof rows)[0]>>(
    () => (rows[0] ? Object.keys(rows[0]).slice(1, 4) : ([] as any)),
    [rows]
  );

  function sortRows(a: IData, b: IData) {
    if (typeof a[selected] === 'string' && typeof b[selected] === 'string') {
      return (a[selected] as string).localeCompare(b[selected] as string) * (sort ? -1 : 1);
    }
    return sort ? -1 : 1;
  }

  function selectSort(value: keyof (typeof rows)[0]) {
    setSelected(value);
    setSort((v) => !v);
  }

  return (
    <div>
      <div className="mb-5 text-center text-xl">{title}</div>
      <div className="grid min-w-60 overflow-auto rounded-sm border border-slate-400">
        <div className="grid grid-cols-3">
          {head.map((item, index) => (
            <button
              className="cursor-pointer select-none border-b border-b-slate-600 px-5 py-5 text-xl uppercase hover:text-blue-600"
              key={index}
              onClick={() => selectSort(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {sorted.map((value, index) => (
          <div className="grid grid-cols-3 border-b border-b-slate-400 py-5" key={value.id}>
            <div className="px-5 ">{value.title}</div>
            <div className="px-5 ">{value.about}</div>
            <div className="px-5">
              {typeof value.content === 'string' ? value.content : 'Content with subtable'}
            </div>
            {typeof value.content === 'string' ? (
              <div className="px-5">{value.content}</div>
            ) : (
              <div className=" col-span-3 px-5 pt-5">
                <CustomTable key={index} rows={value.content} title="Subtable" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
