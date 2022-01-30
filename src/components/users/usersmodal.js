import React, { useCallback, useState, memo, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInputGroup, MDBInput } from 'mdbreact';

import Spinner from '../resources/spinner';

import api from '../../services/api'

const UserModal = ({title, show, close, userId}) => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [webSite, setWebSite] = useState('')
    const [street, setStreet] = useState('')
    const [suite, setSuite] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [phrase, setPhrase] = useState('')
    const [bS, setBS] = useState('')
    const [loading, setLoading] = useState(false)

    const validateForm = useCallback(() => !(name.length && email.length), [name, email])  

    const addUser = useCallback(() => {
        api.post(`proexe-users`, [
            {
                "name": name,
                "username": username,
                "email": email,
                "address": {
                    "street": street,
                    "suite": suite,
                    "city": city,
                    "zipcode": zipcode,
                    "geo": {
                        "lat": lat,
                        "lng": lng
                    }
                },
                "phone": phone,
                "website": webSite,
                "company": {
                    "name": companyName,
                    "catchPhrase": phrase,
                    "bs": bS
                }
            }
        ])
        .then(({status}) => {
            if (status === 201) {
                NotificationManager.success("User Added successful")
            } else {
                NotificationManager.error("Error to create new user")
            }
        })
        .catch(e => NotificationManager.error("Error to create new user"))
        .finally(close)
    }, [bS, city, close, companyName, email, lat, lng, name, phone, phrase, street, suite, username, webSite, zipcode])

    const editUser = useCallback(() => {
        api.put(`proexe-users/${userId}`, {
            "name": name,
            "username": username,
            "email": email,
            "address": {
                "street": street,
                "suite": suite,
                "city": city,
                "zipcode": zipcode,
                "geo": {
                    "lat": lat,
                    "lng": lng
                }
            },
            "phone": phone,
            "website": webSite,
            "company": {
                "name": companyName,
                "catchPhrase": phrase,
                "bs": bS
            }
        })
        .then(({status}) => {
            if (status === 200) {
                NotificationManager.success("User Updated successful")
            } else {
                NotificationManager.error("Error to update new user")
            }
        })
        .catch(e => NotificationManager.error("Error to update new user"))
        .finally(close)
    }, [userId, bS, city, close, companyName, email, lat, lng, name, phone, phrase, street, suite, username, webSite, zipcode])

    useEffect(() => {
        if (userId) {
            setLoading(true)
            api.get(`proexe-users/${userId}`)
                .then(({status, data}) => {
                    if (status === 200) {
                        setName(data.name)
                        setUsername(data.username)
                        setEmail(data.email)
                        setPhone(data.phone)
                        setWebSite(data.website)
                        setStreet(data.address.street)
                        setSuite(data.address.suite)
                        setCity(data.address.city)
                        setZipcode(data.address.zipcode)
                        setLat(data.address.geo.lat)
                        setLng(data.address.geo.lng)
                        setCompanyName(data.company.name)
                        setPhrase(data.company.catchPhrase)
                        setBS(data.company.bs)
                    }
                })
                .catch(e => {
                    NotificationManager.warning("Error to get user data")
                    close()
                })
                .finally(() => setLoading(false))
        } else {
            setName('')
            setUsername('')
            setEmail('')
            setPhone('')
            setWebSite('')
            setStreet('')
            setSuite('')
            setCity('')
            setZipcode('')
            setLat('')
            setLng('')
            setCompanyName('')
            setPhrase('')
            setBS('')
            setLoading(false)
        }
    }, [userId, close])

    return (
        <MDBModal size='lg' isOpen={show} toggle={close}>
            <MDBModalHeader toggle={close}><h2>{title} user</h2></MDBModalHeader>
            <MDBModalBody>
                { loading
                    ? <Spinner/>
                    : <>
                        <>
                            <MDBInputGroup 
                                label={<strong>General</strong>}
                                material
                                prepend="Name"
                                type='text'
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Username"
                                type='text'
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                            />
                            <MDBInputGroup 
                                material
                                prepend="E-mail"
                                type='email'
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Phone Number"
                                type='phone'
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Website"
                                type='url'
                                onChange={e => setWebSite(e.target.value)}
                                value={webSite}
                            />
                        </>
                        <>
                            <MDBInputGroup 
                                label={<strong>Address</strong>}
                                material
                                prepend="Street"
                                type='text'
                                onChange={e => setStreet(e.target.value)}
                                value={street}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Suite"
                                type='text'
                                onChange={e => setSuite(e.target.value)}
                                value={suite}
                            />
                            <MDBInputGroup 
                                material
                                prepend="City"
                                type='text'
                                onChange={e => setCity(e.target.value)}
                                value={city}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Zip Code"
                                type='text'
                                onChange={e => setZipcode(e.target.value)}
                                value={zipcode}
                            />
                            <MDBInputGroup
                                material
                                prepend="Geo Position"
                                inputs={
                                    <>
                                        <MDBInput 
                                            noTag 
                                            type="number"  
                                            hint="Latitude" 
                                            onChange={e => setLat(e.target.value)}
                                            value={lat}
                                        />
                                        <MDBInput 
                                            noTag 
                                            type="number" 
                                            hint="Longitude" 
                                            onChange={e => setLng(e.target.value)}
                                            value={lng}
                                        />
                                    </>
                                }
                            />
                        </>
                        <>
                            <MDBInputGroup 
                                label={<strong>Company</strong>}
                                material
                                prepend="Name"
                                type='text'
                                onChange={e => setCompanyName(e.target.value)}
                                value={companyName}
                            />
                            <MDBInputGroup 
                                material
                                prepend="Catch Phrase"
                                type='text'
                                onChange={e => setPhrase(e.target.value)}
                                value={phrase}
                            />
                            <MDBInputGroup 
                                material
                                prepend="BS"
                                type='text'
                                onChange={e => setBS(e.target.value)}
                                value={bS}
                            />
                        </>
                    </>
                }
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={close}>Close</MDBBtn>
            <MDBBtn color="primary" disabled={validateForm()} onClick={(title === 'Add') ? addUser : editUser}>Save</MDBBtn>
            </MDBModalFooter>
      </MDBModal>
    );
};

export default memo(UserModal);