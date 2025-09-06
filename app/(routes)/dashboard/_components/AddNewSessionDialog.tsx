"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import { ArrowRight, Loader2 } from 'lucide-react'
import axios from 'axios'
import DoctorCard, { doctorAgent } from './DoctorCard'
import SuggestedDoctor from './SuggestedDoctor'

const AddNewSessionDialog = () => {
    const [note, setNote] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>();
    const [SelectedDoctor, setSelectedDoctor] = useState<doctorAgent>();
    const OnClickNext = async () => {
        setLoading(true);
        const result = await axios.post('/api/suggest-doctors', {
            notes: note
        });
        console.log(result.data);
        setSuggestedDoctors(result.data);
        setLoading(false);
    }

    const onStartConsultation = async () => {
        setLoading(true);
        const result = await axios.post('/api/session-chat', {
            notes: note,
            selectedDoctor: SelectedDoctor
        });
        console.log(result.data);

        if (result.data?.sessionId) {
            console.log(result.data.sessionId );
        }
        setLoading(false);

    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='mt-3 cursor-pointer'>+ Start a Consultation</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Basic Details</DialogTitle>
                    <DialogDescription asChild>
                        {!suggestedDoctors ?
                            <div>
                                <h2>Add Symptoms or Any other Details</h2>
                                <Textarea placeholder='Add Detail here....'
                                    className='h-[200px] mt-1'
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>
                            :
                            <div>
                                <h2>Select the doctor</h2>
                                <div className='grid grid-cols-2 gap-3'>
                                    {suggestedDoctors.map((doctor, index) => (
                                        <SuggestedDoctor doctorAgent={doctor} key={index}
                                            setSelectedDoctor={() => setSelectedDoctor(doctor)} 
                                            //@ts-ignore
                                            selectedDoctor={SelectedDoctor} />
                                    ))}
                                </div>
                            </div>}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'outline'} className='cursor-pointer'>Cancel</Button>
                    </DialogClose>
                    {!suggestedDoctors ? <Button disabled={!note || loading} className='cursor-pointer' onClick={() => OnClickNext()}>

                        Next {loading ? <Loader2 className='animate-spin' /> : <ArrowRight />}
                    </Button>
                        : <Button disabled={loading || !SelectedDoctor} onClick={() => onStartConsultation()}>Start Consultation
                        {loading ? <Loader2 className='animate-spin' /> : <ArrowRight />}</Button>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddNewSessionDialog