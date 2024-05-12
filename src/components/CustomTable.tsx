interface Props {
  rows: Array<(string | string[][])[]>;
}

export default function CustomTable({ rows }: Props) {
  const length = rows[0]?.length || 0;
  const style = { gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))` };

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
