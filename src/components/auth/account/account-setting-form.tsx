'use client'
import { useAuth } from "@/context/AuthContext";
import { IUser } from "@/interface/user";
import axiosinstance from "@/lib/axios";
import { Form, Input, Button, Divider, Switch } from "@heroui/react";
import { FormEvent, useEffect, useState } from "react";

export const AccountSettingForm = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<IUser | null>(null)
  useEffect(() => {
    const data = async () => {
      if (user && user.user_id) {
        try {
          const res = await axiosinstance.get(`/users/info?user_id=${user.user_id}`)
          setProfile(res.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
    data()
  }, [user])
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      axiosinstance.put('/users/update', {
        user_id: user?.user_id,
        ...data
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(profile?.name)
  return (
    <Form onSubmit={onSubmit} className="gap-5">
      <Input
        isRequired
        label="Name"
        labelPlacement="outside"
        name="name"
        defaultValue={profile && profile.name || ""}
        placeholder="Enter your Name"
        type="text"
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Input
        isRequired
        label="Email"
        labelPlacement="outside"
        name="email"
        defaultValue={profile?.email}
        placeholder="Enter your email"
        type="email"
      />
      <Button type="submit" className="w-full mt-2 bg-dark-pink-primary font-semibold rounded-md">
        Save
      </Button>
    </Form>
  )

}

export const AccountPreferencesForm = () => {

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[0.95rem] font-semibold">Shiro Stack Newsletter</div>
          <div className="text-sm text-slate-400 font-semibold">toshiroitdv@gmail.com</div>
        </div>
        <div className="cursor-pointer font-semibold text-sm text-primary">
          <Switch size="sm" color="secondary" />
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[0.95rem] font-semibold">Emails</div>
          <div className="text-sm text-slate-400 font-semibold">Update your preferences</div>
        </div>
        <div className="cursor-pointer font-semibold text-sm text-primary">
          <Switch size="sm" color="secondary" />
        </div>
      </div>

    </>
  )
}
