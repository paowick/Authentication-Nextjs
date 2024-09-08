'use server'

import { redirect } from "next/navigation"

export async function signin(prevState, formData) {
    if (formData.get('user') === "korn") {
        redirect('/')
    } else {
        return { message: 'Please enter a valid email' }
    }
}