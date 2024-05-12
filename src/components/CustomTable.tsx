import { useMemo } from 'react';

interface Props {
  rows: Array<(string | string[][])[]>;
}

export default function CustomTable({ rows }: Props) {
  const style = useMemo(
    () => ({ gridTemplateColumns: `repeat(${rows[0]?.length || 0}, minmax(0, 1fr))` }),
    [rows]
  );

  return (
    <div className="grid border border-slate-600" style={style}>
      {rows.map((row) =>
        row.map((item, j) =>
          Array.isArray(item) ? (
            <CustomTable rows={item} key={j} />
          ) : (
            <div className="border border-slate-600" key={j}>
              {item}
            </div>
          )
        )
      )}
    </div>
  );
}
