'use client'

import { Award, Send } from 'lucide-react'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Notice {
  id: number
  title: string
  date: string
  description: string
}

const notices: Notice[] = [
  {
    id: 1,
    title: '[안내] 말라톤 999 사이트 소개',
    date: '2025.06.13',
    description:
      '국내외 마라톤 대회 정보, 코스 정보, 참가 신청, 마라톤 팁과 가이드를 제공하는 종합 마라톤 정보 사이트입니다. 초보자부터 전문가까지 모든 러너를 위한 완벽한 마라톤 가이드를 제공합니다.',
  },
  {
    id: 2,
    title: '[축하] 오픈 기념 이벤트',
    date: '2025.06.13',
    description:
      '말라톤 999 오픈을 축하합니다! 🎉 오픈 기념으로 첫 회원가입 시 특별한 혜택을 제공합니다. 마라톤 정보와 함께 더 나은 러닝 라이프를 시작해보세요!',
  },
  {
    id: 3,
    title: '[업데이트] 마라톤 대회 일정 추가',
    date: '2025.06.13',
    description:
      '2025년 상반기 주요 마라톤 대회 일정이 업데이트되었습니다. 서울마라톤, 부산마라톤, 제주마라톤 등 다양한 대회 정보를 확인하고 참가 신청을 준비해보세요!',
  },
]

interface DialogNoticeProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function DialogNotice({
  open,
  onOpenChange,
}: DialogNoticeProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader className='border-b pb-6'>
          <DialogTitle className='flex items-center font-black text-blue-700 justify-center gap-1 text-xl'>
            <Award className='h-5 w-5' />
            공지사항
          </DialogTitle>
          <DialogDescription className='text-center'>
            최신 공지사항을 여기서 확인하세요!
          </DialogDescription>
        </DialogHeader>

        {notices.map((notice) => (
          <div key={notice.id} className='border-b pb-4'>
            <div className='flex items-end mb-1'>
              <h3 className='font-semibold text-sm mr-2'>{notice.title}</h3>
              <span className='text-xs text-muted-foreground'>
                {notice.date}
              </span>
            </div>
            <p className='text-sm text-muted-foreground leading-6 hover:underline underline-offset-4 cursor-pointer'>
              {notice.description}
            </p>
          </div>
        ))}

        <DialogFooter className='sm:justify-center mt-4'>
          <DialogClose asChild>
            <Button className='w-full'>
              <Send /> 확인 완료
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
