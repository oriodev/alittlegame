import React from 'react';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import { BiHeartCircle } from 'react-icons/bi';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  return (
    <div className="flex justify-between p-5 bg-slate-800 text-gray-200">
      <Link className="text-xl transition-colors hover:text-gray-300" href="/">
        demon game
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>games</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>game options !!</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/mindread">mind reading</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ModeToggle />
      <div>
        <Button variant="ghost">
          <BiHeartCircle className="mr-2 h-6 w-6" /> log in
        </Button>
      </div>
    </div>
  );
};
