import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CountryDropdown from '../general/CountryDropdown'
import Footer from '../general/Footer'
import { ALERT, UPDATE_PROFILE_SUCCESS_DEFAULT } from '../State/actionCreator'
import { updateUserProfileAction } from '../State/actions'
import NavigationRoute from './NavigationRoute'

const Profile = () => {
  const dispatch = useDispatch()

  const {
    errorMessage,
    successMessage,
    shouldBtnShow,
    loading,
    userData,
    successAlert,
    errorAlert,
  } = useSelector((state) => state.authReducer)
  const [userUpdate, setUserUpdate] = useState({
    fullname: userData.fullname || '',
    username: userData.username || '',
    email: userData.email || '',
    message: userData.message || '',
    accountType: userData.accountType || '',
    password: userData.password || '',
    newPassword: userData.newPassword || '',
    confirmPassword: userData.confirmPassword || '',
    coverLater: userData.coverLater || '',
    aboutUser: userData.aboutUser || '',
    country: userData.country || '',
    photo: '',
    skill: userData.skills || '',
    tagline: userData.tagline || '',
  })

  const [userResume, setUserResume] = useState({
    email: '',
    message: '',
    fullname: '',
    file: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    updateUserProfileAction(userUpdate)

    setUserUpdate({
      ...userUpdate,
      fullname: '',
      username: '',
      email: '',
      message: '',
      accountType: '',
      password: '',
      newPassword: '',
      confirmPassword: '',
      coverLater: '',
      aboutUser: '',
      country: '',
      photo: '',
      skill: '',
      tagline: '',
    })

    setUserResume({
      ...userResume,
      email: '',
      message: '',
      fullname: '',
      file: '',
    })
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_AUTH_REQUEST_URL}/profile/info`)
      .then((res) => {
        const data = res.data

        dispatch({ type: UPDATE_PROFILE_SUCCESS_DEFAULT, data })
      })
      .catch((error) => {
        const { message } = error.response.data
        console.log(message)
      })
  }, [])

  return (
    <div id="main-wrapper">
      <div className="clearfix"></div>

      <div
        className="page-title bg-cover"
        style={{
          background:
            'url(https://themezhub.net/workoo-demo/workoo/assets/img/bn-1.jpg)no-repeat',
        }}
        data-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12"></div>
          </div>
        </div>
      </div>
      {/* ============================ Page Title End ================================== */}

      {/* ============================ Main Section Start ================================== */}
      <section className="gray-bg pt-4">
        <form onSubmit={handleSubmit}>
          <div className="container-fluid">
            <div className="row m-0">
              <NavigationRoute />
              {/* Item Wrap Start */}
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    {/* Breadcrumbs */}
                    <div className="bredcrumb_wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/">Home</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="/user/dashboard">Dashboard</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Profile
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="w-25 m-auto alert-media">
                      <Alert
                        as="h4"
                        variant="success"
                        show={successAlert}
                        dismissible
                        onClose={() => dispatch({ type: ALERT })}
                      >
                        {successMessage}
                      </Alert>
                      <Alert
                        as="h4"
                        dismissible
                        variant="danger"
                        show={errorAlert}
                        onClose={() => dispatch({ type: ALERT })}
                      >
                        {errorMessage}
                      </Alert>
                    </div>
                    {/* Single Wrap */}
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="fa fa-user mr-1"></i>My Account
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body">
                        <div className="row">
                          <div className="col-auto">
                            <div className="custom-file avater_uploads">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="customFile"
                                value={userUpdate.photo}
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    photo: e.target.files[0],
                                  })
                                }
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFile"
                              >
                                {userData.profilePic.picPath ? (
                                  <img
                                    src={userData.profilePic.picPath}
                                    className="img-fluid rounded"
                                    alt="team-1"
                                  />
                                ) : (
                                  <>
                                    <i className="fa fa-user"></i>
                                  </>
                                )}
                              </label>
                            </div>
                          </div>

                          <div className="col">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label className="active" htmlFor="flname">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    value={userUpdate.fullname}
                                    id="flname"
                                    onChange={(e) =>
                                      setUserUpdate({
                                        ...userUpdate,
                                        fullname: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label className="active" htmlFor="username">
                                    User Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control with-light"
                                    value={userUpdate.username}
                                    id="username"
                                    onChange={(e) =>
                                      setUserUpdate({
                                        ...userUpdate,
                                        username: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="accType">Account Type</label>
                                  <input
                                    className="form-control with-light"
                                    id="accType"
                                    type="text"
                                    value={userUpdate.accountType}
                                    onChange={(e) =>
                                      setUserUpdate({
                                        ...userUpdate,
                                        accountType: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                <div className="form-group">
                                  <label className="active" htmlFor="email">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control with-light"
                                    value={userUpdate.email}
                                    id="email"
                                    onChange={(e) =>
                                      setUserUpdate({
                                        ...userUpdate,
                                        email: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Wrap End */}

                    {/* Single Wrap */}
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="ti-settings mr-1"></i>My Profile
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                  <div className="_file_caption">
                                    <div className="_file_caption_flex">
                                      <div className="_eltio_caption_body small">
                                        <h4>Resume.pdf</h4>
                                        <span>PDF</span>
                                      </div>
                                    </div>
                                    <div className="_file_caption_right">
                                      <a
                                        href="#upload-resume"
                                        data-toggle="modal"
                                      >
                                        <i className="fa fa-download"></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                  <div className="_file_caption">
                                    <div className="_file_caption_flex">
                                      <div className="_eltio_caption_body small">
                                        <h4 className="w-100">
                                          Cover Letter.docx
                                        </h4>
                                        <span>Docx</span>
                                      </div>
                                    </div>
                                    <div className="label_flex">
                                      <div className="custom-file">
                                        <input
                                          type="file"
                                          className="custom-file-input"
                                          id="coverLater"
                                          value={userUpdate.coverLater}
                                          onChange={(e) =>
                                            setUserUpdate({
                                              ...userUpdate,
                                              coverLater: e.target.files[0],
                                            })
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="_file_caption_right ">
                                      <span
                                        className="d-inline-block  rounded px-3 py-2"
                                        style={{ backgroundColor: 'white' }}
                                      >
                                        <label htmlFor="coverLater">
                                          <i className="fa fa-download"></i>
                                        </label>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group with-light">
                              <label>
                                Required Skills <span>(optional)</span>
                              </label>
                              <div className="tg_grouping">
                                <input
                                  type="text"
                                  id="lg-input"
                                  className="form-control with-light"
                                  placeholder="e.g. job title, career"
                                  value={userUpdate.skill}
                                  onChange={(e) =>
                                    setUserUpdate({
                                      ...userUpdate,
                                      skill: e.target.value,
                                    })
                                  }
                                />
                                <ul className="autocomplete-content dropdown-content"></ul>
                                <Link
                                  to="#"
                                  id="cmd-ChipsAjout"
                                  className="btn_groupin_tag"
                                >
                                  <i className="fa fa-plus"></i>
                                </Link>
                              </div>
                              <div
                                id="lg-Chips"
                                data-index="0"
                                data-initialized="true"
                                className="chips"
                              >
                                <input
                                  id="b07584c6-087f-45d9-bf2c-e72f9c2a5d63"
                                  className="input"
                                  placeholder=""
                                  defaultValue="React"
                                  onChange={() => {}}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group">
                              <label className="active">Tagline</label>
                              <input
                                type="text"
                                className="form-control with-light"
                                id="oldPsw"
                                value={userUpdate.tagline}
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    tagline: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="form-group ">
                              <label className="active" htmlFor="country">
                                Nationality
                              </label>
                              <br />
                              <CountryDropdown
                                state={userUpdate.country}
                                setState={setUserUpdate}
                              />
                              <span
                                className="select2 select2-container select2-container--default"
                                dir="ltr"
                                data-select2-id="1"
                                style={{ width: '252px' }}
                              ></span>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12">
                            <div className="form-group">
                              <label className="active" htmlFor="msg">
                                About Yourself
                              </label>
                              <textarea
                                className="form-control with-light"
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    message: e.target.value,
                                  })
                                }
                                id="msg"
                                value={userUpdate.message}
                              >
                                About Me
                              </textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Wrap End */}

                    {/* Single Wrap */}
                    <div className="_dashboard_content">
                      <div className="_dashboard_content_header">
                        <div className="_dashboard__header_flex">
                          <h4>
                            <i className="ti-lock mr-1"></i>Set Password
                          </h4>
                        </div>
                      </div>

                      <div className="_dashboard_content_body">
                        <div className="row">
                          <div className="col-xl-4 col-lg-4">
                            <div className="form-group">
                              <label htmlFor="oldPsw">Old Password</label>
                              <input
                                type="password"
                                className="form-control with-light"
                                id="oldPsw"
                                value={userUpdate.password}
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    password: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="form-group">
                              <label htmlFor="newpsw">New Password</label>
                              <input
                                type="password"
                                className="form-control with-light"
                                id="newpsw"
                                value={userUpdate.newPassword}
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    newPassword: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <input
                                type="password"
                                className="form-control with-light"
                                id="oldPsw"
                                value={userUpdate.confirmPassword}
                                onChange={(e) =>
                                  setUserUpdate({
                                    ...userUpdate,
                                    confirmPassword: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Single Wrap End */}

                    <button
                      type="submit"
                      className="btn btn-save"
                      disabled={shouldBtnShow}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            animation="border"
                            role="status"
                            aria-hidden="true"
                            as="span"
                            variant="success"
                            className="mr-2 d-inline-block"
                          />
                          <span className="visually-hidden ">Loading...</span>
                        </>
                      ) : (
                        <>
                          <i className="ti-user d-inline-block mr-2"></i> Save
                          Changes
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>

      <Footer />

      <div
        className="modal fade"
        id="upload-resume"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="resumeupload"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form"
          role="document"
        >
          <div className="modal-content" id="resumeupload">
            <div className="modal-header">
              <h4>Upload Resume</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="ti-close"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="login-form">
                <form>
                  <div className="form-row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="active" htmlFor="flname">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="fullname"
                          id="flname"
                          value={userResume.fullname}
                          onChange={(e) =>
                            setUserResume({
                              ...userResume,
                              fullname: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="active" htmlFor="email">
                          E-Mail ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="ucicl@gmail.com"
                          id="email"
                          value={userResume.email}
                          onChange={(e) =>
                            setUserResume({
                              ...userResume,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="active" htmlFor="resume">
                      Paste Your Resume
                    </label>
                    <textarea
                      className="form-control ht-150"
                      placeholder="Copy & Paste Resume"
                      id="resume"
                      value={userResume.message}
                      onChange={(e) =>
                        setUserResume({
                          ...userResume,
                          message: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="light">doc, docx,pdf,txt,png</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="uploadResume"
                        value={userResume.file}
                        onChange={(e) =>
                          setUserResume({
                            ...userResume,
                            file: e.target.files[0],
                          })
                        }
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="uploadResume"
                      >
                        <i className="ti-link mr-1"></i>Upload Resume
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn dark-2 btn-md full-width pop-login"
                    >
                      Upload Resume
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
