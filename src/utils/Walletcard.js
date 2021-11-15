import React, {useState} from 'react'
import {ethers} from 'ethers'

const Walletcard = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null)
    const [connButtonText, setConnButtonText] = useState('connect Wallet');

    const connectWalletHandler = () =>{
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
                accountChangedHandler(result[0])
            })
        }
        else{
            setErrorMessage("install Metamask!")
        }

    }

    const accountChangedHandler = (newAccount) =>{
        setDefaultAccount(newAccount);
        getUserBalance(newAccount)

    }

    const getUserBalance = (address) => {
        window.ethereum.request({method:'eth_getBalance', params: [address, 'latest']})
        .then(balance =>{
            setUserBalance(ethers.utils.formatEther(balance));
        })

    }

    return (
        <div>
            <h4>{"Connection to Metamask"}</h4>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <div>
                <h3>Adrress: {defaultAccount}</h3>
            </div>
            <div>Balance: {userBalance}</div>
            {errorMessage}
        </div>
    )
}

export default Walletcard
