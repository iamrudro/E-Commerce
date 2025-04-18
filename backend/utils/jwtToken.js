export const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // Option for Cookies🍪
    const options = {
        expires: new Date(Date.now() + process.env.EXPIRE_COOKIE * 24 * 60 * 60 * 1000),
        httpOnly: true  //hr*min*secs*millisec
    }
    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            user,
            token
        })
}