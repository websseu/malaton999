'use client'

import { useEffect, useState } from 'react'
import { APP_NAME, APP_COPYRIGHT } from '@/lib/constants'
import { useAuth } from '@/contexts/context-auth'
import { Button } from '../ui/button'
import {
  TrafficCone,
  TrainFront,
  ChevronRight,
  Home,
  Bath,
  Carrot,
  Dessert,
  Beer,
  IceCreamBowl,
  Ghost,
  Siren,
  Rabbit,
  Drum,
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import DialogNotice from '../dialog/dialog-notice'
import DialogContact from '../dialog/dialog-contact'
import DialogSignup from '../dialog/dialog-signup'
import DialogSignin from '../dialog/dialog-signin'
import DialogLogout from '../dialog/dialog-logout'
import { useRouter } from 'next/navigation'

const menuItems = [
  { icon: Home, label: '홈', href: '/', type: 'page' },
  { icon: Bath, label: '공지사항', href: '#notice', type: 'dialog' },
  { icon: Carrot, label: '문의하기', href: '#contact', type: 'dialog' },
  { icon: Dessert, label: '기록 관리', type: 'page', href: '/records' },
  { icon: Drum, label: '마이 페이지', type: 'page', href: '/mypage' },
]

const authItems = [
  { icon: IceCreamBowl, label: '로그인', href: '#login', type: 'dialog' },
  { icon: Ghost, label: '회원가입', href: '#signup', type: 'dialog' },
]

const loggedInItems = [
  { icon: Siren, label: '로그아웃', href: '#logout', type: 'dialog' },
]

interface SessionData {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    id?: string
    role?: string
    visitCount?: number
  }
  expires?: string
}

interface HeaderRightProps {
  session: SessionData | null
}

export default function HeaderRight({ session }: HeaderRightProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoggedIn, setUser, setIsLoggedIn } = useAuth()
  const [isNoticeDialogOpen, setIsNoticeDialogOpen] = useState(false)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false)
  const [isSigninDialogOpen, setIsSigninDialogOpen] = useState(false)
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)

  // 세션 정보를 context에 저장
  useEffect(() => {
    if (session?.user) {
      setUser(session.user)
      setIsLoggedIn(true)
      console.log('세션 정보가 context에 저장되었습니다:', session.user)
    } else {
      setUser(null)
      setIsLoggedIn(false)
      console.log('세션이 없습니다. 로그아웃 상태로 설정됩니다.')
    }
  }, [session, setUser, setIsLoggedIn])

  const handleMenuClick = (href: string, type: string) => {
    if (type === 'dialog') {
      setIsOpen(false)
      if (href === '#notice') {
        setIsNoticeDialogOpen(true)
      } else if (href === '#contact') {
        setIsContactDialogOpen(true)
      } else if (href === '#login') {
        setIsSigninDialogOpen(true)
      } else if (href === '#signup') {
        setIsSignupDialogOpen(true)
      } else if (href === '#logout') {
        setIsLogoutDialogOpen(true)
      }
    } else {
      // 페이지 이동이 필요한 경우
      if (href === '/records' && !isLoggedIn) {
        // 기록관리는 로그인이 필요
        setIsOpen(false)
        setIsSigninDialogOpen(true)
      } else if (href === '/admin' && user?.role !== 'admin') {
        // 관리자 페이지는 관리자만 접근 가능
        setIsOpen(false)
        alert('관리자만 접근할 수 있습니다.')
      } else {
        setIsOpen(false)
        router.push(href) // ← 페이지 이동
      }
    }
  }

  // 현재 표시할 인증 관련 메뉴 결정
  const currentAuthItems = isLoggedIn ? loggedInItems : authItems

  // 관리자 메뉴 표시 여부 결정
  const showAdminItems = isLoggedIn && user?.role === 'admin'

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='group h-11 w-11 border bg-blue-700 hover:bg-white hover:border-blue-700 rounded-full hover:text-white'
          >
            <TrafficCone className='text-white group-hover:text-blue-700' />
            <span className='sr-only'>메뉴 열기</span>
          </Button>
        </SheetTrigger>

        <SheetContent side='right' className='w-80 gap-0'>
          <SheetHeader className='border-b'>
            <SheetTitle className='font-gmarket text-xl font-bold text-blue-700 mt-1 pb-4'>
              {APP_NAME}
            </SheetTitle>
          </SheetHeader>

          {/* 사용자 정보 섹션 */}
          <div className='p-4 border-b bg-gray-100 mt-[-16px]'>
            <div className='text-center py-2'>
              {isLoggedIn && user ? (
                <>
                  <div className='flex justify-center mb-3'>
                    <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                      <Rabbit className='w-6 h-6 text-blue-600' />
                    </div>
                  </div>
                  <h3 className='font-gmarket font-bold text-lg text-gray-900'>
                    안녕하세요, {user.name || '사용자'}님!
                  </h3>
                  <p className='font-nanum text-sm text-gray-600 truncate mb-1'>
                    {user.email}
                  </p>
                  <p className='font-nanum text-xs text-blue-600 mt-1'>
                    방문 {user.visitCount || 0}회
                  </p>
                </>
              ) : (
                <>
                  <div className='flex justify-center mb-3'>
                    <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                      <TrainFront className='w-6 h-6 text-blue-600' />
                    </div>
                  </div>
                  <h3 className='font-gmarket font-bold text-lg text-gray-900'>
                    방가워요! 환영합니다!
                  </h3>
                  <p className='font-nanum text-sm text-gray-600 mb-2'>
                    로그인하고 더 많은 서비스를 이용해보세요
                  </p>
                  <div className='flex items-center justify-center gap-1'>
                    <div className='w-2 h-2 bg-blue-200 rounded-full'></div>
                    <span className='font-nanum text-xs text-blue-600'>
                      마라톤 정보
                    </span>
                    <div className='w-2 h-2 bg-green-200 rounded-full ml-2'></div>
                    <span className='font-nanum text-xs text-green-600'>
                      커뮤니티
                    </span>
                    <div className='w-2 h-2 bg-purple-200 rounded-full ml-2'></div>
                    <span className='font-nanum text-xs text-purple-600'>
                      기록 관리
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 메인 메뉴 */}
          <div className='py-2'>
            <nav className='space-y-1'>
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href, item.type)}
                    className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                  >
                    <div className='flex items-center gap-3'>
                      <Icon className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                      <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                  </button>
                )
              })}
            </nav>
          </div>

          {/* 인증 메뉴 */}
          <div className='py-2 border-t border-b'>
            <nav className='space-y-1'>
              {currentAuthItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href, item.type)}
                    className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                  >
                    <div className='flex items-center gap-3'>
                      <Icon className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                      <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                  </button>
                )
              })}
            </nav>
          </div>

          {/* 관리자 메뉴 (관리자만 표시) */}
          {showAdminItems && (
            <div className='border-b py-2'>
              <nav className='space-y-1'>
                <button
                  onClick={() => handleMenuClick('/admin', 'page')}
                  className='w-full flex items-center justify-between px-4 py-3 text-left hover:bg-blue-50 transition-colors group cursor-pointer'
                >
                  <div className='flex items-center gap-3'>
                    <Beer className='w-4 h-4 text-gray-600 group-hover:text-blue-600' />
                    <span className='font-nanum text-sm text-gray-900 group-hover:text-blue-600'>
                      관리자 페이지
                    </span>
                  </div>
                  <ChevronRight className='w-4 h-4 text-gray-400 group-hover:text-blue-600' />
                </button>
              </nav>
            </div>
          )}

          {/* 앱 정보 */}
          <div className='absolute bottom-0 left-0 right-0'>
            <div className='text-center py-3 bg-gray-50'>
              <p className='font-nanum text-xs text-gray-500 mb-1'>
                {APP_NAME} v1.0.0
              </p>
              <p className='font-nanum text-xs text-gray-400'>
                {APP_COPYRIGHT}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Dialog 컴포넌트들 */}
      <DialogNotice
        open={isNoticeDialogOpen}
        onOpenChange={setIsNoticeDialogOpen}
      />
      <DialogContact
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
      <DialogSignup
        open={isSignupDialogOpen}
        onOpenChange={setIsSignupDialogOpen}
      />
      <DialogSignin
        open={isSigninDialogOpen}
        onOpenChange={setIsSigninDialogOpen}
      />
      <DialogLogout
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      />
    </>
  )
}
