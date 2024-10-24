import { PredefinedCompanies, Routes } from '@/app/lib/shared';
import { PrimaryHeader } from '@/app/ui/primary-header';
import {
  IconGift,
  IconLayoutGrid,
  IconPlus,
  IconSearch,
} from '@tabler/icons-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-full flex flex-col">
      <PrimaryHeader
        title="Add cards"
        actions={
          <Link href={Routes.ScanCard}>
            <button className="btn btn-primary">
              <IconPlus className="w-6 h-6" />
              Add card
            </button>
          </Link>
        }
      >
        <>
          <div className="form-control flex-1">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow w-full" placeholder="Search" />
              <IconSearch className="h-4 w-4 opacity-70"></IconSearch>
            </label>
          </div>
          <button className="btn btn-circle btn-ghost">
            <IconLayoutGrid className="w-6 h-6" />
          </button>
        </>
      </PrimaryHeader>
      <main className="overflow-y-auto flex-1">
        <ul className="menu menu-lg rounded-box text-base-content">
          {Object.values(PredefinedCompanies).map(company => (
            <li key={company}>
              <span>
                <IconGift className="w-8 h-8" />
                {company}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
