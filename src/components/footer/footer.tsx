import SubscribeForm from "../subscribe/subscribe-form";

export default function Footer() {
  return (
    <div className="container mx-auto mt-40">
      <div className="flex justify-between items-center border-t border-b dark:border-slate-700 py-9">
        <h1 className="text-2xl font-bold">Itou Toshiro</h1>
        <div className="font-semibold text-lg">
          Sign up
        </div>
        <div className="font-semibold text-xl">Powered by DNPC</div>
      </div>
      <div>
        <SubscribeForm />
      </div>
    </div>
  )
}
