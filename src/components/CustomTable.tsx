interface Props {
  rows: Array<string[] | string>;
}

export default function CustomTable({ rows }: Props) {
  return (
    <div>
      {rows.map((row) =>
        Array.isArray(row) ? (
          <CustomTable rows={row}></CustomTable>
        ) : (
          <div>{row}</div>
        )
      )}
    </div>
  );
}
