import React from 'react'
import { Search } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '../ui/input'

export default function AdminPosts() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='text-xl font-gmarket text-blue-700 flex items-center gap-2'>
            글 관리(3)
          </CardTitle>
          <CardDescription>
            글을 관리하고 삭제 및 상태 변경을 할 수 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end'>
              {/* 검색영역 */}
              <div className='relative w-full sm:w-80 flex gap-2'>
                <Search className='absolute left-3 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input placeholder='사용자, 이메일 검색' className='pl-9 h-9' />
              </div>

              {/* 상태 뱃지 영역 */}
              <div>
                <Select>
                  <SelectTrigger className='w-24 py-4 text-muted-foreground'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='10'>10개</SelectItem>
                    <SelectItem value='20'>20개</SelectItem>
                    <SelectItem value='50'>50개</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='rounded border'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-center'>번호</TableHead>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className='text-center'>방문수</TableHead>
                    <TableHead className='text-center'>가입일</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className='text-center py-6 text-muted-foreground'
                    >
                      등록된 문의사항이 없습니다.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
