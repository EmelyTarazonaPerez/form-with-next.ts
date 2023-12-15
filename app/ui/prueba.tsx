'user client'
import { errorToJSON } from "next/dist/server/render"
import { dtoUser } from "../lib/definitions"

export default function Prueba({
    children,
    paola
}: {
    children: React.ReactNode,
    paola :  string
}) {

  return (
    <>
        {children}
        <p>{paola}</p>
    </>

  )
}