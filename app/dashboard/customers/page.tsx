import { Metadata } from "next"
import { fetchFilteredCustomers } from "@/app/lib/data"
import Table from "@/app/ui/customers/table"

export const metadata: Metadata = {
    title: "Customers",
}

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ""
    const currentPage = Number(searchParams?.page) || 1

    const customers = await fetchFilteredCustomers(query)

    console.log(customers)

    return <Table customers={customers} />
}
