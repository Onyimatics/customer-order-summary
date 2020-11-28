import React, { useState, useEffect } from "react";
import './CustomerProfilePage.css';
import avatar from '../../avatar-3.png';
import axios from "axios";

const CustomerProfile = () => {
        const [profile, setProfile] = useState(
            {
                profileName: "",
                profileAddress: "",
                profilePhone: "",
                profileAbout: "",
                profileLike: [],
                profileDislike: []
            });

        const profileData = async () => {
            try {
                const res = await axios.get("https://indapi.kumba.io/webdev/assignment");
                console.log('hey>>>>', res.data);
                setProfile({
                    profileName: res.data.user.name,
                    profileAddress: res.data.user.address,
                    profilePhone: res.data.user.phone,
                    profileAbout: res.data.user.about,
                    profileLike: res.data.user.likes.map((like, index) => <li key={index}>{like}</li>),
                    profileDislike: res.data.user.dislikes.map((dislike, index) => <li key={index}>{dislike}</li>)
            })
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            profileData();
        }, []);
    return (
        <div className="card card-profile bg-white">
                <img
                    src={avatar}
                    alt="Avatar"
                    style={{ width: '100px', margin: "auto" }}
                    className="mt-4"
                />
            <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="mb-0">Name</h6>
                        </div>
                        <div className="col-sm-6 text-secondary text-left">
                            {profile.profileName}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-6 text-secondary text-left">
                            {profile.profileAddress}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-6 text-secondary text-left">
                            {profile.profilePhone}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="mb-0">About</h6>
                        </div>
                        <div className="col-sm-6 text-secondary text-left">
                            {profile.profileAbout}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="mb-0">Likes</h6>
                        </div>
                        <div className="col-sm-6 text-secondary text-left">
                            <ul>
                                {profile.profileLike}
                            </ul>
                        </div>
                    </div>
                    <hr />
                <div className="row">
                    <div className="col-sm-6">
                        <h6 className="mb-0">Dislikes</h6>
                    </div>
                    <div className="col-sm-6 text-secondary text-left">
                        <ul>
                            {profile.profileDislike}
                        </ul>
                    </div>
                </div>
                <hr />
                </div>
        </div>
    )
}

export default CustomerProfile;