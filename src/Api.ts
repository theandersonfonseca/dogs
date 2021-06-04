export const API_URL = 'https://dogsapi.origamid.dev/json'

type TokenPost = {
  username: string
  password: string
}

export function TOKEN_POST(body: TokenPost) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function USER_GET(token: string) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

type UserPost = {
  username: string
  email: string
  password: string
}

export function USER_POST(body: UserPost) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

type PhotoPost = {
  formData: FormData
  token: string
}

export function PHOTO_POST({ formData, token }: PhotoPost) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  }
}

type PhotosGet = {
  page: string
  total: string
  user: string
}

type OptionsType = {
  method: string
  cache: string
} & RequestInit

const options: OptionsType = {
  method: 'GET',
  cache: 'no-store'
}

export function PHOTOS_GET({ page, total, user }: PhotosGet) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: options
  }
}

export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: options
  }
}

export function COMMENT_POST(id: string, body: { comment: string }) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      },
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_DELETE(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    }
  }
}

type PasswordLost = {
  login: string
  url: string
}

export function PASSWORD_LOST(body: PasswordLost) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

type PasswordReset = {
  login: string
  key: string
  password: string
}

export function PASSWORD_RESET(body: PasswordReset) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token')
      }
    }
  }
}
