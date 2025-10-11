import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({ratings}) => {

    return (
        <div className='w-full h-[400px]'>
            <h1 className='ml-[2%] mb-1.5 font-semibold text-3xl'>Ratings</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    layout='vertical'
                    data={ratings}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 25,
                    }}
                    barSize={30}
                >
                    <XAxis type='number' />
                    <YAxis type='category' dataKey='name' scale='auto' padding={{ left: 0, right: 0 }} />
                    {/* <Tooltip /> */}
                    {/* <Legend /> */}
                    <Bar dataKey="count" fill="#ff8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
