import type { FC } from "react"
import { Button } from "../button"
import { Link } from "react-router-dom"

type Props = { children: React.ReactNode; icon: JSX.Element; href: string }

export const NavButton: FC<Props> = ({ children, href, icon }) => {
  return (
    <Button className="flex justify-start text-x1" icon={icon}>
      <Link to={href}>{children}</Link>
    </Button>
  )
}
