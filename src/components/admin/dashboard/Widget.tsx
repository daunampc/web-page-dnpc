import { Button, Card, CardBody, CardFooter, CardHeader, Chip } from "@heroui/react"
import { CalendarClock, ChevronDown, UserPen } from "lucide-react"

export default function Widget() {
  return (
    <Card>
      <CardHeader>
        <Button isIconOnly>
          <UserPen />
        </Button>
      </CardHeader>
      <CardBody>
        <div className="font-normal text-sm text-slate-400">Total Users</div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-sans font-semibold">3.941</h1>
          <div className="inline-flex items-center bg-red-100 text-red-700 rounded-lg px-1.5 space-y-0.5">
            <div className=" font-semibold">11.9%</div>
            <ChevronDown />
          </div>
        </div>
      </CardBody>
      <CardFooter className="border-t border-t-slate-500">
        <div className="flex items-center text-sm gap-1 text-slate-300">
          <CalendarClock size={14} />
          <div>Update your firewall settings</div>
        </div>
      </CardFooter>
    </Card>
  )
}
