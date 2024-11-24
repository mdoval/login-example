export const sendEmailVerification = async (email: string, token: string) => {
    console.log(`${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}`)
}