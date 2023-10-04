'use client'
import { PiGenderMale, PiGenderFemale, PiMapPin } from 'react-icons/pi'
import Image from 'next/image'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from '@/components/Pagination'
import { useState } from 'react'

export default function Home() {
    const pets_list = [
        {
            id: '1',
            name: 'Paçoca',
            gender: 'female',
            age: 1,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '2',
            name: 'Pipoca',
            gender: 'female',
            age: 2,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '3',
            name: 'Caramelo',
            gender: 'male',
            age: 3,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '4',
            name: 'Chocolate',
            gender: 'male',
            age: 4,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '5',
            name: 'Faísca',
            gender: 'female',
            age: 5,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '6',
            name: 'Laica',
            gender: 'female',
            age: 6,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '7',
            name: 'Bebel',
            gender: 'female',
            age: 7,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '8',
            name: 'Princesa',
            gender: 'female',
            age: 8,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '9',
            name: 'Marsh',
            gender: 'male',
            age: 9,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '10',
            name: 'Mellow',
            gender: 'male',
            age: 10,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '11',
            name: 'Pudim',
            gender: 'male',
            age: 11,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '12',
            name: 'Tapioca',
            gender: 'male',
            age: 12,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '13',
            name: 'Quindim',
            gender: 'male',
            age: 13,
            ong: 'PetAmigos',
            type: 'dog',
        },
        {
            id: '14',
            name: 'Cadinho',
            gender: 'male',
            age: 14,
            ong: 'PetAmigos',
            type: 'dog',
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const itemsToShow = pets_list.slice(startIndex, endIndex)

    return (
        <>
             <Navbar />
            <div className="flex flex-col items-center bg-background h-full px-4 py-8 sm:py-14 sm:px-32 md:px-40 xl:px-60 2xl:px-80 gap-12">
                <h1 className="self-start text-2xl md:text-3xl">
                    Procuro por...
                </h1>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-32">
                    <button className="bg-secondary-variant py-6 rounded-lg w-90">
                        <p className="text-base">Cachorros</p>
                    </button>
                    <button className="bg-secondary-variant py-6 rounded-lg w-90">
                        <p className="text-base">Gatos</p>
                    </button>
                </div>
                <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 w-full">
                    {itemsToShow.map((pet) => {
                        return (
                            <>
                                <div
                                    key={pet.id}
                                    className="bg-main-variant rounded border border-black w-auto shadow-md shadow-black/25 hover:cursor-pointer"
                                >
                                    <div className="flex justify-center items-center relative h-52 md:h-60 w-auto border border-black object-cover overflow-hidden">
                                        <Image
                                            src="/pet-card-dog-1.svg"
                                            layout="fill"
                                            alt="Picture of the dog"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col p-4 gap-2">
                                        <div className="flex justify-between gap-2">
                                            <p className="text-sm sm:text-base 2xl:text-lg truncate hover:break-normal">
                                                {pet.name}, {pet.age}
                                                {pet.age === 1
                                                    ? ' ano'
                                                    : ' anos'}
                                            </p>
                                            {pet.gender === 'male' ? (
                                                <PiGenderMale className="text-base md:text-xl" />
                                            ) : (
                                                <PiGenderFemale className="text-base md:text-xl" />
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <PiMapPin className="text-base md:text-xl" />
                                            <p className="text-xs 2xl:text-sm">
                                                PetAmigos
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className="paginate">
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        items={pets_list}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            <Footer/>
        </>
    )
}
