import React from "react";
import { NavLink } from "react-router-dom";
import x from "./Profileinfo.module.css";
import yes from "./../../../assets/yes.jpg";
import no from "./../../../assets/no.jpg";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={x.fon}>
      <img src=""></img>
      <div className={x.description_blok}>
        <img
          id="avatarr"
          className={x.standart}
          src={props.profile.photos.large}
        />

        <h3>{props.profile.fullName}</h3>
      </div>
      <div className={x.column_right}>
        <div>
          <div className={x.status}>
            <ProfileStatus
              setStatus={props.setStatus}
              updateStatus={props.updateStatus}
              status={props.status}
            />
          </div>

          <div className={x.search_work}>
            Search work{" "}
            {props.profile.lookingForAJob == true ? (
              <img src={yes} />
            ) : (
              <img src={no} />
            )}
          </div>
          <p className={x.prof_style}>
            Search work {props.profile.lookingForAJobDescription}
          </p>
        </div>
        <div className={x.contacts}>
          <h4>contacts</h4>
          <div className={x.contact}>{props.profile.contacts.github}</div>
          <div className={x.contact}>{props.profile.contacts.instagram}</div>
          <div className={x.contact}>{props.profile.contacts.mainLink}</div>
          <div className={x.contact}>{props.profile.contacts.twitter}</div>
          <div className={x.contact}>{props.profile.contacts.vk}</div>
          <div className={x.contact}>{props.profile.contacts.website}</div>
          <div className={x.contact}>{props.status} </div>
        </div>
      </div>
    </div>
  );
};
export default Profileinfo;
