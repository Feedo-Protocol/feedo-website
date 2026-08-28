const ROWS = [
  ["Funding key", "your wallet, holds credits", "never leaves your wallet"],
  ["Usage key", "signs requests only", "safe in server env"],
];

export function KeyTable() {
  return (
    <div className="overflow-x-auto border border-border rounded-md">
      <table className="w-full font-mono text-xs sm:text-[13px]">
        <caption className="sr-only">Funding key compared with usage key</caption>
        <thead>
          <tr className="border-b border-border text-left">
            <th scope="col" className="label-mono px-4 py-3 font-normal">
              Key
            </th>
            <th scope="col" className="label-mono px-4 py-3 font-normal">
              Role
            </th>
            <th scope="col" className="label-mono px-4 py-3 font-normal">
              Where it lives
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([key, role, where]) => (
            <tr key={key} className="border-b border-border last:border-b-0">
              <th scope="row" className="px-4 py-3 text-left font-normal text-accent">
                {key}
              </th>
              <td className="px-4 py-3 text-foreground">{role}</td>
              <td className="px-4 py-3 text-muted-foreground">{where}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
