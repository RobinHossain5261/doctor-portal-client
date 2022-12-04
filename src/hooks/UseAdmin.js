import { useEffect, useState } from "react"

const UseAdmin = email => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-vert.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default UseAdmin;