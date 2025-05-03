import Widget from "./Widget";

export default function DashboardWidget() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <Widget />
      <Widget />
      <Widget />
      <Widget />
    </div>
  )

}
