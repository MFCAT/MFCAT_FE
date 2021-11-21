
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import '../App.css';
import logo from '../images/logo.png'
import { FaWallet } from "react-icons/fa";

const Topbar = () => {



    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null)
    const [connButtonText, setConnButtonText] = useState('connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {

                    accountChangedHandler(result[0])
                })
        }
        else {
            setErrorMessage("install Metamask!")
        }

    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString())

    }

    const getUserBalance = (address) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] })
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })

    }

    /*     window.ethereum.on('accountsChanged', accountChangedHandler);
    
        const chainChangedHandler = () => {
            window.location.reload();
        }
    
        window.ethereum.on('chainChanged', chainChangedHandler); */


    return (
        <Navbar className="color-nav" expand="lg" variant="dark">
            <Container >
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="210"
                        height="40"
                        className="img-responsive"
                    /> <span style={{ color: 'red' }}> 	&#946;</span>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#marketplace">MARKETPLACE</Nav.Link>
                        <Nav.Link href="#create">CREATE</Nav.Link>
                        <Nav.Link href="#account">MY ACCOUNT</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button onClick={connectWalletHandler} variant="outline-success">
                            <FaWallet className="react-icons" />  {!defaultAccount ? ' CONNECT YOUR WALLET' : String(defaultAccount).substring(0, 6) + "..." + String(defaultAccount).substring(36)}
                        </Button>
                    </Nav>
                </Navbar.Collapse>

            </Container >
        </Navbar>


    )
}

export default Topbar
