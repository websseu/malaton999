'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getDday } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
} from 'lucide-react'

export default function HomePage() {
  const [selectedMonth, setSelectedMonth] = useState('2024-03')

  const months = [
    { value: '2025-01', label: '2025년 1월' },
    { value: '2025-02', label: '2025년 2월' },
    { value: '2025-03', label: '2025년 3월' },
    { value: '2025-04', label: '2025년 4월' },
    { value: '2025-05', label: '2025년 5월' },
    { value: '2025-06', label: '2025년 6월' },
    { value: '2025-07', label: '2025년 7월' },
    { value: '2025-08', label: '2025년 8월' },
    { value: '2025-09', label: '2025년 9월' },
    { value: '2025-10', label: '2025년 10월' },
    { value: '2025-11', label: '2025년 11월' },
    { value: '2025-12', label: '2025년 12월' },
  ]

  const marathonData = [
    {
      id: 1,
      status: '접수마감',
      name: '마블런 2025 SEOUL',
      description:
        '마블런 2025 서울은 마블 테마의 도심 러닝 이벤트로, 많은 팬들과 러너들의 기대를 모으고 있습니다',
      startDate: '2025-09-14 오전 8시',
      regDate: '2025-07-01 14:00 선착순 접수',
      location: '서울 광장',
      courses: [
        { name: '하프', price: '70,000원' },
        { name: '10KM', price: '60,000원' },
      ],
      scale: 15000,
      organizer: '인제군청',
      sponsor: '강원도청, 트레일러닝협회',
      highlights: ['마블런', '서울 광장'],
    },
    {
      id: 2,
      status: '접수마감',
      name: '2025 인제 와일드 트레일 30K',
      description:
        '트랜스 제주, UTMB 시리즈 대회 운영사와 러너블이 만나 개최하는 인제 와일드 트레일 30K',
      startDate: '2025-09-28 오전 8시',
      regDate: '2025-07-01 14:00 선착순 접수',
      location: '인제군 고사리 수변공원',
      courses: [{ name: '32K', price: '130,000원' }],
      scale: 1000,
      organizer: '인제군청',
      sponsor: '강원도청, 트레일러닝협회',
      highlights: ['인제', '30K'],
    },
    {
      id: 3,
      status: '접수마감',
      name: '2025 Run your way SEOUL 10K RACE',
      description:
        '더 새롭고 특별해진 뉴발란스의 10K RACE에 여러분을 초대합니다.',
      startDate: '2025-09-28 오전 8시',
      regDate: '2025-07-07 참가권 등록',
      location: '여의도 공원',
      courses: [{ name: '10K', price: '189,000원' }],
      scale: 10000,
      organizer: '뉴발란스',
      sponsor: '',
      highlights: ['서울', '10K'],
    },
    {
      id: 4,
      status: '접수마감',
      name: '2025 한글런',
      description:
        '한글문화도시 세종시에서 장대하게 펼쳐지는 2025 한글런에 여러분을 초대합니다.',
      startDate: '2025-10-09 오전 9시',
      regDate: '2025-05-05 오전 10시 선착순 마감',
      location: '세종시 중앙공원 도시축제마당',
      courses: [
        { name: '5.15km', price: '44,000원' },
        { name: '10.9km', price: '55,000원' },
      ],
      scale: 10000,
      organizer: '세종특별자차시, 헤럴드미디어그룹',
      sponsor: '국립한글박문관, 노스페이스, 대우건설, 세리니티CC',
      highlights: ['한글날', '세종대왕 탄신일'],
    },
  ]

  const getStatusBadge = (status: string, date?: string) => {
    switch (status) {
      case '접수마감':
        return (
          <div className='flex items-center gap-2'>
            <Badge className='bg-green-50 text-green-700 border-green-600'>
              접수마감
            </Badge>
            {date && (
              <Badge className='bg-orange-100 text-orange-800 border-orange-700 text-xs'>
                {getDday(date)}
              </Badge>
            )}
          </div>
        )
      case '예정':
        return (
          <div className='flex items-center gap-2'>
            <Badge className='bg-blue-100 text-blue-800 border-blue-300'>
              예정
            </Badge>
            {date && (
              <Badge className='bg-orange-100 text-orange-800 border-orange-300 text-xs'>
                {getDday(date)}
              </Badge>
            )}
          </div>
        )
      case '취소':
        return (
          <Badge className='bg-red-100 text-red-800 border-red-300'>취소</Badge>
        )
      default:
        return <Badge variant='outline'>{status}</Badge>
    }
  }

  return (
    <div className='space-y-8 mt-4'>
      {/* 월별 선택 영역 */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-xl font-gmarket text-blue-700'>
            월별 마라톤 일정
          </CardTitle>
          <CardDescription>
            원하는 월을 선택하여 해당 월의 마라톤 일정을 확인하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2'>
            {months.map((month) => (
              <Button
                key={month.value}
                variant={selectedMonth === month.value ? 'default' : 'outline'}
                onClick={() => setSelectedMonth(month.value)}
                className='text-xs sm:text-sm h-8 sm:h-9 lg:h-10'
              >
                {month.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 마라톤 정보 섹션 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {marathonData.map((marathon) => (
          <Card key={marathon.id} className='hover:shadow-lg transition-shadow'>
            <CardHeader>
              <CardTitle className='text-xl font-gmarket text-gray-900 truncate whitespace-nowrap'>
                {marathon.name}
              </CardTitle>
              <div className='flex items-center gap-2 mb-2'>
                {getStatusBadge(
                  marathon.status,
                  marathon.startDate.split(' ')[0]
                )}
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              {/* 기본 정보 */}
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Calendar className='h-4 w-4' />
                  <span>
                    {(() => {
                      const dateStr = marathon.startDate.split(' ')[0] // '2025-09-14' 부분만 추출
                      return new Date(dateStr).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                      })
                    })()}
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <MapPin className='h-4 w-4' />
                  <span>{marathon.location}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Clock className='h-4 w-4' />
                  <span>
                    {marathon.courses.map((course) => course.name).join(', ')}
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Users className='h-4 w-4' />
                  <span>{marathon.scale.toLocaleString()}명 참가</span>
                </div>
              </div>

              {/* 설명 */}
              <p className='text-sm text-gray-700 leading-relaxed'>
                {marathon.description}
              </p>

              {/* 하이라이트 */}
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                  <Star className='h-4 w-4 text-yellow-500' />
                  <span>주요 특징</span>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {marathon.highlights.map((highlight, index) => (
                    <Badge key={index} variant='outline' className='text-xs'>
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className='flex gap-2 pt-2'>
                <Button size='sm' className='flex-1'>
                  <TrendingUp className='h-4 w-4 mr-1' />
                  상세정보
                </Button>
                <Button size='sm' variant='outline'>
                  <Award className='h-4 w-4' />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 통계 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className='text-xl font-gmarket text-blue-700'>
            마라톤 통계
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='text-center p-4 bg-blue-50 rounded-lg'>
              <div className='text-2xl font-bold text-blue-700'>4</div>
              <div className='text-sm text-gray-600'>총 대회 수</div>
            </div>
            <div className='text-center p-4 bg-green-50 rounded-lg'>
              <div className='text-2xl font-bold text-green-700'>66,000</div>
              <div className='text-sm text-gray-600'>총 참가자</div>
            </div>
            <div className='text-center p-4 bg-purple-50 rounded-lg'>
              <div className='text-2xl font-bold text-purple-700'>3</div>
              <div className='text-sm text-gray-600'>예정 대회</div>
            </div>
            <div className='text-center p-4 bg-orange-50 rounded-lg'>
              <div className='text-2xl font-bold text-orange-700'>1</div>
              <div className='text-sm text-gray-600'>완료 대회</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
