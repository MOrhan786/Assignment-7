import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

async function fetchBooks(): Promise<Book[]> {
  return [
    { id: 1, name: 'Book 1', type: 'Fiction', available: true },
    { id: 2, name: 'Book 2', type: 'Non-Fiction', available: false },
    { id: 3, name: 'Book 3', type: 'Science', available: true },
    { id: 4, name: 'Book 4', type: 'Fiction', available: true },
    { id: 5, name: 'Book 5', type: 'Non-Fiction', available: false },
    { id: 6, name: 'Book 6', type: 'Science', available: true },
  ];
}

async function BookCards() {
  const books = await fetchBooks();
  console.log("BookCards ~books", books);

  return (
    <div className="min-h-screen bg-100">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <h1 className="text-5xl font-extrabold tracking-widest animate-pulse mb-16">Server-Side Rendering</h1>
        <h2 className="text-3xl font-bold text-center mb-16 text-white mt-16">Books Available</h2>
      </div>

      <div className='min-h-screen gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14'>
          {books.map((book: Book) => (
            <Card key={book.id} className='bg-gray-200 flex gap-6 hover:scale-[1.02] overflow-hidden duration-200'>
              <Image src={`/images/book${book.id}.png`} alt='book image' width={100} height={100} />

              <div className='relative w-full text-start flex flex-col gap-4'>
                <h2 className='text-[24px] font-bold'>{book.name}</h2>
                <p>{book.type}</p>
                <p className={book.available ? 'text-green-500' : 'text-red-500'}>
                  {book.available ? 'Available' : 'Not Available'}
                </p>

                <div className='absolute bottom-0 right-0 left-0 flex justify-end gap-4 p-4'>
                  <Button className='bg-blue-600 hover:bg-blue-800 text-white'>Place an Order</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookCards;