import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  ArrowLeft,
  Share2,
  Heart,
  MapPin,
  Clock,
  Calendar,
  FerrisWheel,
  Armchair,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function MarathonDetailPage() {
  return (
    <>
      {/* 헤더 */}
      <div className='border-b sticky top-0 z-10 bg-white/80 backdrop-blur-md'>
        <div className='flex items-center justify-between py-4'>
          <Button variant='ghost' size='icon' className='bg-gray-50'>
            <ArrowLeft className='h-5 w-5' />
          </Button>
          <h1 className='text-lg font-nanum truncate mx-4 ml-10'>
            마블런 2025 SEOUL
          </h1>
          <div className='flex gap-1'>
            <Button variant='ghost' size='icon' className='bg-gray-100'>
              <Share2 className='h-5 w-5' />
            </Button>

            <Button variant='ghost' size='icon' className='bg-gray-100'>
              <Heart className='h-5 w-5 transition-all duration-200' />
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* 메인 이미지 */}
        <Card className='p-0 mt-6 border-none'>
          <CardContent className='px-0'>
            <div className='relative h-64 md:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded'>
              <div className='absolute bottom-8 left-8 right-8 text-white'>
                <h2 className='text-xl font-bold mb-1'>마블런 2025 SEOUL</h2>
                <p className='opacity-90 text-sm'>
                  마블런 2025 서울은 마블 테마의 도심 러닝 이벤트로, 많은 팬들과
                  러너들의 기대를 모으고 있습니다
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className='p-4 bg-gray-50 flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <span className='bg-green-50 text-green-700 border-green-600 font-nanum border text-sm px-3 py-1 rounded'>
              접수마감
            </span>
            <span className='bg-blue-50 text-blue-700 border-blue-600 font-nanum border text-sm px-3 py-1 rounded'>
              D-49
            </span>
          </div>
          <div className='flex gap-1'>
            <Button
              variant='outline'
              className='bg-transparent px-3 h-8 text-sm border-blue-700 text-blue-700'
            >
              <MapPin className='h-4 w-4' />
              홈페이지
            </Button>

            <Button
              variant='outline'
              className='bg-transparent px-3 h-8 text-sm border-orange-500 text-orange-500'
            >
              <MapPin className='h-4 w-4' />
              장소 보기
            </Button>
          </div>
        </div>

        {/* 대회 정보 */}
        <Card className='gap-2 mt-6'>
          <CardHeader>
            <CardTitle className='font-gmarket text-blue-700 text-xl'>
              대회 정보
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='text-xs font-medium text-gray-600 mb-1 block'>
                  대회 날짜
                </label>
                <div className='flex items-center gap-1'>
                  <Calendar className='h-4 w-4 text-cyan-500' />
                  <p className='font-medium text-[15px]'>
                    2025년 9월 14일 일요일
                  </p>
                </div>
              </div>

              <div>
                <label className='text-xs font-medium text-gray-600 mb-1 block'>
                  대회 장소
                </label>
                <div className='flex items-center gap-1'>
                  <MapPin className='h-4 w-4 text-pink-500' />
                  <p className='font-medium text-[15px]'>서울 광장</p>
                </div>
              </div>

              <div>
                <label className='text-xs font-medium text-gray-600 mb-1 block'>
                  후원
                </label>
                <div className='flex items-center gap-1'>
                  <Armchair className='h-4 w-4 text-red-500' />
                  <p className='font-medium text-[15px]'>한국 코리아 마블</p>
                </div>
              </div>

              <div>
                <label className='text-xs font-medium text-gray-600'>
                  제한시간
                </label>
                <div className='font-medium flex items-center gap-1'>
                  <Clock className='h-4 w-4 text-amber-500' />
                  <p className='font-medium text-[15px]'>1시간 30분</p>
                </div>
              </div>

              <div>
                <label className='text-xs font-medium text-gray-600'>
                  종목
                </label>
                <div className='font-medium flex items-center gap-1'>
                  <Clock className='h-4 w-4 text-blue-700' />
                  <p className='font-medium text-[15px]'>하프, 10Km</p>
                </div>
              </div>

              <div>
                <label className='text-xs font-medium text-gray-600'>
                  참가인원
                </label>
                <div className='font-medium flex items-center gap-1'>
                  <FerrisWheel className='h-4 w-4 text-orange-500' />
                  <p className='font-medium text-[15px]'> 15,000명 참가</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 대회 정보 */}
        <Card className='gap-2 mt-6'>
          <CardHeader>
            <CardTitle className='font-gmarket text-xl'>대회 소개</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='text-sm text-muted-foreground leading-'>
              2025년, 서울이 다시 한 번 히어로들의 무대가 됩니다. 마블런 2025
              SEOUL은 마블 세계관을 테마로 한 미션 러닝 페스티벌로, 참가자들은
              마블 캐릭터 의상을 착용하고 도심을 달리며 다양한 인터랙티브
              콘텐츠와 포토존을 체험할 수 있습니다. 팬들과 함께 마블 세계를
              온몸으로 느낄 수 있는 이 특별한 이벤트, 지금 사전등록을
              준비하세요.
            </p>
          </CardContent>
        </Card>

        {/* 행사 일정 */}
        <Card className='gap-2 mt-6'>
          <CardHeader>
            <CardTitle className='font-gmarket text-xl'>행사 일정</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className='border'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-center'>시간</TableHead>
                  <TableHead className='text-center'>장소</TableHead>
                  <TableHead className='text-center'>내용</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='text-center'>07:00 AM</TableCell>
                  <TableCell className='text-center'>서울 광장</TableCell>
                  <TableCell className='text-center'>
                    행사장 오픈 / 참가자 도착
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-center'>07:30 AM</TableCell>
                  <TableCell className='text-center'>메인무대</TableCell>
                  <TableCell className='text-center'>
                    개회식 / 스트레칭
                  </TableCell>
                </TableRow>
                <TableRow className='bg-red-50'>
                  <TableCell className='text-center'>08:00 AM</TableCell>
                  <TableCell className='text-center'>출발지</TableCell>
                  <TableCell className='text-center'>
                    전체 참가자 출발지 이동 및 출발! (HALF &gt; 10K 순서 진행)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-center'>08:50 AM</TableCell>
                  <TableCell className='text-center'>도착지</TableCell>
                  <TableCell className='text-center'>
                    10K 선두 통과 예상 (후미 도착 10:35 예정)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-center'>09:20 AM</TableCell>
                  <TableCell className='text-center'>도착지</TableCell>
                  <TableCell className='text-center'>
                    HALF 선두 통과 예상 (후미 도착 11:40 예정)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='text-center'>10:30 AM</TableCell>
                  <TableCell className='text-center'>메인무대</TableCell>
                  <TableCell className='text-center'>시상식</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className='text-xs text-red-500 mt-2'>
              ※ 주최사의 사정에 따라 상기 내용은 변경될 수 있습니다.
            </div>
          </CardContent>
        </Card>

        {/* 코스 안내 */}
        <Card className='gap-2 mt-6'>
          <CardHeader>
            <CardTitle className='font-gmarket text-xl'>코스 안내</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col items-center'>
              <div className='flex gap-2 mb-4'>
                <button className='bg-red-500 text-white font-bold px-6 py-2 rounded'>
                  HALF 코스
                </button>
                <button className='border-2 border-red-500 text-red-500 font-bold px-6 py-2 rounded bg-white'>
                  10KM 코스
                </button>
              </div>
              <Image
                src='https://marvelrunkorea.com/img/sub/map_half.png'
                alt='하프 코스 안내'
                width={600}
                height={400}
                className='w-full max-w-3xl rounded border'
              />
              <div className='text-xs text-red-500 mt-2'>
                ※ 주최사의 사정에 따라 상기 내용은 변경될 수 있습니다.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 자주 묻는 질문 */}
        <Card className='gap-2 mt-6'>
          <CardHeader>
            <CardTitle className='font-gmarket text-xl'>
              자주 묻는 질문
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  1. 2025 MARVEL RUN 참가 신청은 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  - MARVEL RUN 홈페이지 접속 --&gt; 참가신청/확인 메뉴 클릭
                  --&gt; 원하는 코스 클릭 <br />
                  행사 약관 및 개인정보 제 3자 제공 동의를 해주신 고객에 한하여
                  신청하실 수 있으며, 행사 참가는 신청자 본인만 가능합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  2. 단체 신청은 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  - MARVEL RUN SEOUL은 단체신청이 불가능합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>3. 참가 신청 제한이 있나요?</AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>4. 회원가입이 필요한가요?</AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>
                  5. 참가비 결제는 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-6'>
                <AccordionTrigger>
                  6. 참가 취소 및 환불은 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-7'>
                <AccordionTrigger>7. 양도가 가능한가요?</AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-8'>
                <AccordionTrigger>
                  8. 코스 변경 및 개인정보 수정이 가능한가요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-9'>
                <AccordionTrigger>
                  9. 기념품은 수령 방법은 어떻게 되나요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-10'>
                <AccordionTrigger>
                  10. 물품보관소는 어떻게 운영되나요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-11'>
                <AccordionTrigger>
                  11. 기록측정은 어떻게 하나요?
                </AccordionTrigger>
                <AccordionContent>
                  {/* 답변 내용을 여기에 입력하세요 */}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
