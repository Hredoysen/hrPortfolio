import { useState } from 'react'
import {Navbar, Button, Dropdown} from "flowbite-react";
import './Navbar.css'

function Nav() {

  return (
    <>
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <span className="navbrand">
      Hredoy<span className="navbrand_2">Sen</span>
    </span>
            </Navbar.Brand>
            <div className="contact-btn">
                <Button className="btn">
                    Contact
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link>
                <Navbar.Link >
                    <Dropdown
                        label="Projects"
                        inline={true}
                        trigger={"hover"}
                    >
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>
                <Navbar.Link>
                    <Dropdown
                        label="Services"
                        inline={true}
                        trigger={"hover"}
                    >
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default Nav
