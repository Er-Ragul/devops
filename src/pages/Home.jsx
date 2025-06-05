import React, { useState } from "react"

function Home(){

    let [navbar, setNavbar] = useState(false)

    return(
        <>
            {/* Navbar */}
            <nav className="navbar p-3" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#home">
                        <h1 className="title poppins-bold has-text-black">Ragul</h1>
                    </a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setNavbar(!navbar)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${navbar ? 'is-active' : null}`}>
                    <div className="navbar-end">
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="#home" onClick={() => setNavbar(!navbar)}>
                            Home
                        </a>
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="#about" onClick={() => setNavbar(!navbar)}>
                            About
                        </a>
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="#experience" onClick={() => setNavbar(!navbar)}>
                            Work Experience
                        </a>
                        <div className="navbar-item has-dropdown is-hoverable has-text-black poppins-semibold is-size-5">
                            <a className="navbar-item has-text-black poppins-semibold is-size-5">Blogs</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item" href="/blog/portfolio-development">Portfolio Development</a>
                                <a className="navbar-item" href="/blog/devops-journey">DevOps Journey</a>
                                <a className="navbar-item" href="/blog/containerizing">Containerizing Web App</a>
                            </div>
                        </div>
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="#projects" onClick={() => setNavbar(!navbar)}>
                            Projects
                        </a>
                        <a className="navbar-item has-text-black poppins-semibold is-size-5" href="#contact" onClick={() => setNavbar(!navbar)}>
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
            {/* Home */}
            <section className="section is-medium" id="home">
                <div className="columns">
                    <div className="column is-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <h1 className="title is-size-1 has-text-black poppins-extrabold">Ragul Harisankar</h1>
                        <p className="is-size-4 has-text-black poppins-semibold">Analyst 1 Infrastructure Services at DXC Technology</p>
                        <div className="buttons mt-6">
                            <button className="button is-outlined is-black" onClick={() => window.location.href="#about"}>MORE ABOUT ME</button>
                            <button className="button is-black" onClick={() => window.location.href="https://drive.google.com/file/d/1VQOZkYWaf7EY9l7jC-2VViMk7Ch7kzbA/view?usp=sharing"}>GET MY CV</button>
                        </div>
                    </div>
                    <div className="column is-6 is-flex is-justify-content-center is-align-items-center">
                        <img src={'/images/itsme.jpeg'} width={400} style={{ borderRadius: 14 }}/>
                    </div>
                </div>
            </section>
            {/* About */}
            <section className="section is-medium" id="about">
                <div className="columns is-flex is-justify-content-center">
                    <div className="column is-11">
                        <h1 className="title is-size-3 has-text-centered has-text-black poppins-bold">About Me</h1>
                        <p className="is-size-5 has-text-black poppins-regular">With over 5 years of experience in Linux Administration (including Unix patching) and Project Management Operations, I have a strong foundation in managing and optimizing enterprise-level systems. My expertise includes troubleshooting, system maintenance, and automation in Linux environments, along with a proven track record of effectively managing and delivering projects. I am now seeking a challenging role as a Linux Administrator or DevOps Engineer to leverage my skills in system administration, automation, and continuous integration/deployment. </p>
                        <p className="is-size-5 has-text-black poppins-semibold-italic has-text-centered mt-6">&quot; Time is my valuable asset &quot;</p>
                    </div>
                </div>
            </section>
            {/* Experience */}
            <section className="section is-medium" id="experience">
                <div className="columns is-flex is-justify-content-center">
                    <div className="column is-11">
                        <h1 className="title is-size-3 has-text-centered had-text-black poppins-bold">Work Experience</h1>
                        <div className="colored-box p-4">
                            <p className="is-size-4 has-text-white poppins-bold">Associate Professional Software Engineer</p>
                            <p className="is-size-5 mt-2 has-text-white poppins-regular">DXC Technology, 2020 - 2021</p>
                            <p className="is-size-5 mt-4 has-text-white poppins-semibold">Responsibilities</p>
                            <div className="content mt-2">
                                <ul>
                                    <li className="is-size-5 has-text-white poppins-regular">Handled cluster and storage uplift requests as a Delivery Manager</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Delivered 200+ storage uplift requests without any escalations</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Effectively managed tickets and closed requests on ServiceNow without missing any SLAs</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 colored-box p-4">
                            <p className="is-size-4 has-text-white poppins-bold">Professional 1 System Administrator</p>
                            <p className="is-size-5 mt-2 has-text-white poppins-regular">DXC Technology, 2021 - 2022</p>
                            <p className="is-size-5 mt-4 has-text-white poppins-semibold">Responsibilities</p>
                            <div className="content mt-2">
                                <ul>
                                    <li className="is-size-5 has-text-white poppins-regular">Worked as a Professional 1 System Administrator and Delivery Manager for Virtual Hosting Services (VHS) migration projects</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Responsible for scheduling VM migrations during out-of-business hours to minimize disruptions</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Conducted calls with application owners to explain the VM migration process and address potential impacts, ensuring approval before implementation</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Led a team of 15+ members, coordinating efforts and overseeing successful migration execution</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Successfully migrated over 500+ VMs, ensuring smooth transitions and minimal operational downtime</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 colored-box p-4">
                            <p className="is-size-4 has-text-white poppins-bold">Junior Migration Architect</p>
                            <p className="is-size-5 mt-2 has-text-white poppins-regular">DXC Technology, 2022 - 2023</p>
                            <p className="is-size-5 mt-4 has-text-white poppins-semibold">Responsibilities</p>
                            <div className="content mt-2">
                                <ul>
                                    <li className="is-size-5 has-text-white poppins-regular">Worked as a Junior Migration Architect, serving as both a Technical Implementer and Project Management Operations</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Implemented VM migration changes to move VMs from VMware ESXi 6.5 to 7.0, successfully migrating over 1000 Windows and Linux VMs as a Wintel & Linux Administrator</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Transitioned to the role of Project Management Office (PMO) for migrating On-Premise VMs to Google Cloud (Lift and Shift)</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Conducted meetings with application owners to explain the High-Level Design (HLD) and Low-Level Design (LLD) to obtain approvals for migration initiatives</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 colored-box p-4">
                            <p className="is-size-4 has-text-white poppins-bold">Analyst 1 Infrastructure Servicest</p>
                            <p className="is-size-5 mt-2 has-text-white poppins-regular">DXC Technology, 2023 - Present</p>
                            <p className="is-size-5 mt-4 has-text-white poppins-semibold">Responsibilities</p>
                            <div className="content mt-2">
                                <ul>
                                    <li className="is-size-5 has-text-white poppins-regular">Administered Linux systems, overseeing the regular patching of 800+ servers running various operating systems including RHEL 6, RHEL 7, RHEL 8, SLES, and DHSO</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Performed firmware and VMX upgrades as part of standard maintenance procedures</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Handled post-patching incidents, troubleshooting server issues, and ensuring continuous service availability</li>
                                    <li className="is-size-5 has-text-white poppins-regular">Managed GCP servers, enabling automatic patching through BladeLogic for efficient system updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects */}
            <section className="section is-medium" id="projects">
                <div className="columns is-flex is-justify-content-center">
                    <div className="column is-11">
                        <h1 className="title is-size-3 has-text-centered mb-6 has-text-black poppins-bold">Projects</h1>
                        <div className="columns mt-4">
                            <div className="column is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                <img src={'/images/devops.png'} width={400} style={{ borderRadius: 14 }}/>
                            </div>
                            <div className="column is-flex is-flex-direction-column ">
                                <p className="is-size-4 has-text-weight-bold has-text-black poppins-semibold">CI/CD Pipeline Setup Using Azure DevOps</p>
                                <p className="is-size-5 mt-4 has-text-black poppins-regular">The goal is to build a robust and scalable CI/CD pipeline that can automate the build, test, and deployment of applications on on-prem servers using Azure DevOps. Once we've proven this setup works in an on-premises environment, we will extend the same architecture to Azure Cloud, highlighting how easily DevOps practices can be scaled and migrated.</p>
                                <div className="buttons mt-5">
                                    <button className="button has-text-black poppins-regular" onClick={() => window.location.href="https://github.com/Er-Ragul/devops"}>GET SOURCE CODE</button>
                                    <button className="button has-text-white poppins-regular is-link" onClick={() => window.location.href="/devops/introduction"}>READ DOCS</button>
                                </div>
                            </div>
                        </div>
                        <div className="my-6"></div>
                        <div className="columns mt-4">
                            <div className="column is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                <img src={'/images/mokup_1.jpg'} width={500} style={{ borderRadius: 14 }}/>
                            </div>
                            <div className="column is-flex is-flex-direction-column ">
                                <p className="is-size-4 has-text-weight-bold has-text-black poppins-semibold">Self Manageable Custom VPN Solution</p>
                                <p className="is-size-5 mt-4 has-text-black poppins-regular">Self-Managed VPN is an open-source project developed by me. The application is built using Flutter, with a backend that leverages technologies such as Linux, cloud services, Docker, the WireGuard VPN protocol, and GitHub Actions. Comprehensive documentation is provided to guide users in setting up their own VPN.</p>
                                <div className="buttons mt-5">
                                    <button className="button has-text-black poppins-regular" onClick={() => window.location.href="https://github.com/Er-Ragul/raguls-vpn"}>GET SOURCE CODE</button>
                                </div>
                            </div>
                        </div>
                        <div className="my-6"></div>
                        <div className="columns mt-4">
                            <div className="column is-size-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                                <img src={'/images/mokup_2.jpg'} width={500} style={{ borderRadius: 14 }}/>
                            </div>
                            <div className="column is-flex is-flex-direction-column">
                                <p className="is-size-4 has-text-weight-bold has-text-black poppins-semibold">Teleport</p>
                                <p className="is-size-5 mt-4 has-text-black poppins-regular">Teleport is a WebRTC-based remote desktop application developed using Node.js and Python. WebRTC was utilized as the core technology to enable remote streaming. On the host side, Electron.js was used on top of Node.js to initiate the streaming process. For system control, Python's pyautogui library was employed, particularly for simulating mouse movements and keyboard input.</p>
                                <div className="buttons mt-5">
                                    <button className="button has-text-black poppins-regular" onClick={() => window.location.href="https://github.com/Er-Ragul/Teleport"}>GET SOURCE CODE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section className="section is-medium" id="contact">
                <h1 className="title is-size-3 has-text-centered has-text-black poppins-bold">Contact</h1>
                <div className="columns mt-6">
                    <div className="column is-6-desktop is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                        <div>
                        <p className="is-size-4 has-text-weight-bold mb-3 has-text-black poppins-regular">Contact Me</p>
                        <p className="is-size-5 has-text-black poppins-regular"><b>Phone: </b>+91 7010623482</p>
                        <p className="is-size-5 has-text-black poppins-regular"><b>Email: </b>ragul.harisankar@gmail.com</p>
                        <p className="is-size-5 has-text-black poppins-regular"><b>Address: </b>Plot No.62, Sri Sathiya Sai Baba Nagar,<br/> Thanjavur - 613009</p>
                        </div>
                    </div>
                    <div className="column is-6-desktop is-flex is-justify-content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999066.1564547122!2d77.03018668242034!3d11.875390451066712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac70c22317e35%3A0x748d97d08d16ae9d!2sRaguls%20Enterprise!5e0!3m2!1sen!2sin!4v1743410735315!5m2!1sen!2sin" allowFullScreen="" width={500} height={300}></iframe>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <div className="content has-background-dark py-6">
                <p className="poppins-semibold subtitle has-text-white has-text-centered">© Copyright 2025 Ragul - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Home