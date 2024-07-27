import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { test } from '../lib/actions'
import { auth, signOut } from '@/auth'
import { redirect } from 'next/navigation'

const Page = async () => {
  const res = await auth()

  return (
    <>
      <div>{res?.user?.email || ""}</div>
      <form action={async () => {
        'use server'

        await signOut({ redirectTo: "/" })
      }}>
        <button>sign out</button>
      </form>
    </>
  )
}

export default Page

export const dynamic = 'force-dynamic'