'use client'
import { useAuth } from "@/context/AuthContext";
import { IUser } from "@/interface/user";
import axiosinstance from "@/lib/axios";
import { Form, Input, Button, Divider, Switch } from "@heroui/react";
import { FormEvent, useEffect, useState } from "react";

export const AccountSettingForm = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const data = async () => {
      if (user && user.user_id) {
        try {
          const res = await axiosinstance.get(`/users/info?user_id=${user.user_id}`)
          if (res.data) {
            setProfile({
              ...res.data
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    data()
  }, [])
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      setLoading(true)
      await axiosinstance.put('/users/update', {
        user_id: user?.user_id,
        ...data
      })
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }
  return (
    <Form onSubmit={onSubmit} className="gap-5">
      <Input
        isRequired
        label="Name"
        labelPlacement="outside"
        disabled={loading}
        name="name" onChange={(e) => {
          if (profile) {
            setProfile({
              ...profile,
              name: e.target.value
            })
          }
        }}
        value={profile && profile.name || ""}
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
        disabled={loading}
        labelPlacement="outside"
        name="email"
        value={profile?.email}
        onChange={(e) => {
          if (profile) {
            setProfile({
              ...profile,
              email: e.target.value
            })
          }
        }}
        placeholder="Enter your email"
        type="email"

      />
      <Button isLoading={loading} type="submit" className="w-full mt-2 bg-dark-pink-primary font-semibold rounded-md">
        Save
      </Button>
    </Form>
  )

}

export const AccountPreferencesForm = () => {
  const { user } = useAuth()
  const [profile, setProfile] = useState<IUser | null>(null)
  useEffect(() => {
    const data = async () => {
      if (user && user.user_id) {
        try {
          const res = await axiosinstance.get(`/users/info?user_id=${user.user_id}`)
          if (res.data) {
            setProfile({
              ...res.data
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    data()
  }, [])
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[0.95rem] font-semibold">{profile?.name}</div>
          <div className="text-sm text-slate-400 font-semibold">{profile?.email}</div>
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
