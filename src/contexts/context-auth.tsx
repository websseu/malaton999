'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

// 사용자 타입 정의
interface User {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
  role?: string
  visitCount?: number
}

// AuthContext 타입 정의
interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User | null) => void
  setIsLoggedIn: (isLoggedIn: boolean) => void
  login: (userData: User) => void
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider 컴포넌트
interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  // 로컬 스토리지에서 사용자 정보 복원 (선택사항)
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedLoginStatus = localStorage.getItem('isLoggedIn')

    if (savedUser && savedLoginStatus === 'true') {
      try {
        const parsedUser = JSON.parse(savedUser)
        setUser(parsedUser)
        setIsLoggedIn(true)
        console.log('로컬 스토리지에서 사용자 정보를 복원했습니다:', parsedUser)
      } catch (error) {
        console.error('사용자 정보 복원 중 오류:', error)
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedIn')
      }
    }
  }, [])

  // 사용자 정보가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    if (isLoggedIn && user) {
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
    }
  }, [user, isLoggedIn])

  // 로그인 함수
  const login = (userData: User) => {
    setUser(userData)
    setIsLoggedIn(true)
    console.log('사용자가 로그인했습니다:', userData)
  }

  // 로그아웃 함수
  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem('user')
    localStorage.removeItem('isLoggedIn')
    console.log('사용자가 로그아웃했습니다.')
  }

  // 사용자 정보 업데이트 함수
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      console.log('사용자 정보가 업데이트되었습니다:', updatedUser)
    }
  }

  const value: AuthContextType = {
    user,
    isLoggedIn,
    setUser,
    setIsLoggedIn,
    login,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// useAuth 훅
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용되어야 합니다.')
  }
  return context
}

// 편의를 위한 추가 훅들
export function useUser() {
  const { user } = useAuth()
  return user
}

export function useIsLoggedIn() {
  const { isLoggedIn } = useAuth()
  return isLoggedIn
}

export function useIsAdmin() {
  const { user, isLoggedIn } = useAuth()
  return isLoggedIn && user?.role === 'admin'
}
