FORMAT: 1A
HOST: http://localhost:3000/api/

# Bookmark

Bookmark is a web service that enables user to share and manage bookmarks.

**Note:**

- Bookmark's API is stateful, most of the APIs below rely on session.
- This API document comply with [API blueprint format](https://apiblueprint.org/)

## Auth [/auth/{provider}]

### Auth and login [GET]

Auth and login with third-party account.

This API will first redirect browser to the corresponding third-party auth page. After user authorized, it then redirect to corresponding callback url for `sign up` / `login`. After all `sign up` / `login` steps done, it redirects back to `/`.

+ Parameters

    + provider (required, string) ... Third-party web service you want to auth and login with.
        + Members
            + `google`
            + `facebook`

+ Response 302

    + Headers

            Location: /

## Logout [/logout]

### Logout [GET]

Logout from server, this will clear your session in server.

+ Request

    + Headers

            set-cookie: connect.sid=s%3A6lfsd;kfsd...; Path=/; Expires=Sat, 13 Jul 2019 15:49:51 GMT; HttpOnly

+ Response 302

    + Headers

            Location: /

## Self Profile [/profile]

### Get Self Profile [GET]

Get current session's user profile.

+ Request

    + Headers

            set-cookie: connect.sid=s%3A6lfsd;kfsd...; Path=/; Expires=Sat, 13 Jul 2019 15:49:51 GMT; HttpOnly

+ Response 200 (application/json)

        {
            "authId": "jsoi2sdjwmemwqp.oppsofd",
            "name": "Henry",
            "avatar": "https://your.avatar.com/your/avatar",
            "gender": "male",
            "provider": "google",
            "createTime": "2018-06-26T01:10:01.716Z",
            "role": "member"
        }
