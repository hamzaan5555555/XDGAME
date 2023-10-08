// const people = [
//     {
//       name: 'Leslie Alexander',
//       role: 'Co-Founder / CEO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//       name: 'John Smith',
//       role: 'CTO',
//       imageUrl:
//         'https://example.com/john_smith.jpg',
//     },
//     {
//       name: 'Emily Johnson',
//       role: 'Head of Marketing',
//       imageUrl:
//         'https://example.com/emily_johnson.jpg',
//     },
//     {
//       name: 'Michael Davis',
//       role: 'Chief Financial Officer',
//       imageUrl:
//         'https://example.com/michael_davis.jpg',
//     },
//     {
//       name: 'Sarah Thompson',
//       role: 'Product Manager',
//       imageUrl:
//         'https://example.com/sarah_thompson.jpg',
//     },
//   ];
  
//   export default function Explore() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
//           <div className="max-w-2xl">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Game Of Week <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
//   <path   strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
// </svg>
// </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
//               suspendisse.
//             </p>
//           </div>
//           <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//             {people.map((person) => (
//               <li key={person.name}>
//                 <div className="flex items-center gap-x-6">
//                   <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
//                   <div>
//                     <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
//                     <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
import React from 'react';

const people = [
  {
    name: 'Baldurs Gate III',
    role: '#1',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/169357/1693573355-2284-jaquette-avant.jpg',
  },
  {
    name: 'FIFA24',
    role: '#2',
    imageUrl:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwYHAP/EADMQAAIBAwMCBQIEBgMBAAAAAAECAwAEEQUSIQYxEzJBUWEUIgcVgaEzQnFykcEjYtEW/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAiEQADAQACAgEFAQAAAAAAAAAAAQIRITEDEkEjUWFxwSL/2gAMAwEAAhEDEQA/APJK+AqRV1GamVS0ptqyBSwDcfNWRP8AlCvnGcVe9szamPdIH8QFht9uMZ+a2mxjvQrd55QiY3+h96fdSxrbdP8AgOF3bwf6HNc50ncvFfxoSNhbkn0p11tcxyxxiN1Yl+wPYYrnfFHRuwJtGlWyura/RdzQSCTHvg0//EXri26ptbO2s7aaFIW8R2lxktjGBjPFclZ3SRq0UjYOMr80JMuSSKpDfKOe5l5X2LLwMr6Uyt3Vow2efWlcZ+0irRyMhyDVvHePGT8se3KGuQ3aoxWEMwJGKKwDzVsOf9iIVdDg1SrCudnahnBskQFlywoS/kaSQBicLwBntWsUwhiJ9SO1A5aQlj3NJK50rTWYNtNBfSbgRMqSQuJGY92XtgUFI7O25woY99owM0X06qzXTW0mdkq84+Dn/Vaa1axwXO2Hy/FH14bJO/8ASQmlH3g1eJsd6iXzLUqMCiDNCI4vERtvmFDFgvB70w0rHjNn2oZLY3d1IFYDDHmkmtpoLSS0HDOrAimkc52DPenXQvS1tr1/cxahJIsUMeR4TYJJ9a5q6T6W6ntw24RSMgb3wSKvFYuSFr2eIEzUrWYrRaVlkaLgjGeaLsNHnv1cxOiKvJZzj5/9oFEBkAbIye49KfwrJp1txLFPHcK2zaTlTjGT/k0r3pDpLHT6F9jc/lzySg75NhVWxjGfWuz6B6Qj6itrnWtakmTTISVWOH+JOw7geuB245J9sV5/MxMnP+K9d/DxIuo/w9j0GFo/qLK9Mk0bkD7d5kR8EHI3Y9OdpFNXHBLW+WGy9BdEawfy/Tku9N1JoTNEHll3lAQNxSQnK544x2PtXnemdE6rqHUd/oKtBDdWAZpnmYhNoIwQQDwQwI+K9ltemrmCSOXw4TNbziaKfxDvHZSMAhQuwYxjsT2JNctH1RpNtrfXOvxT2Uj+FHbWkEsgH1RRMHC5yylsDj0FKFM5rTfw+vW1CO2tdY0a6llVmxBcl9irjJOB25A/WqW34eanBHDey6xo1qt2viRLc3BQlTz6j5FM+iOodOlv9d1aS20jRpo9MFta21uFhEjMWYkD1OVTP6Ub1h1DpV/rlj0zbQaDdWZtFg/Nbgo/0mQQxRzwCqgEfOKCS3Qt6jn7LQOotP6YveotMvLeGGASq7KcmZEYqWQEEYyCQT7Uo6d6F6k6l086jpttE9u0jIHlmCFiO5Ge4zxn3Br0v/6LpC//ADfRbTVGt4Rpb2ESTskdttXKgxsfMx3fqAK4rpTo/Rb/AEO3utX61h0+4lG76WG6jHhr6BgTw3uKZLEL86cAgyBRNrHucCsoR9rE9gOP61YjDAZ7LTOdRlTl8o6zpuPTLjXrS3ktY5RyXBOVJGMDHb3ofqMqNeu9qhFEhAVRgD9KR6dcTWM8d1bttmiYMn9famevSNLqlzIRhmbJHtWifWhqft4qf5X9E12oE/2+tNbK11bR7fSdc026MMt/LLDa/TufFLKwUqRjGCSOOc0puc71z3pnp/VOuafYwWNnf+HawS+LFGYIn2Nu3ZBZSfNz3oV2LPR2vUkPX9wradqHUEEsH0c9xKYHCI4hIEiEqgJYZHHbmkFv+H2t3OiRalam0lie3iuBEsjeJsfJ7bcEgKSRnsOM0uTrTqaLaw1u7kZJGkUzlZcFhtI+8H7SP5fL8VZ+suopiJG1WVWWSORdkaIFKZ2bQFAAGTwODk5BpfgPyNW6B1CwuRHf6npNtLJLJDbJNOw+oZPNtO3AHOMnHNB3XQOuxQT3zRRfRpp51AzgsU2gZ8POP4nx2+azi636mRpCNYkzI7SEmGIlWbglCVymf+uKWz9R6xJPIX1CQ77I2DZVebc/ydv383zWXYXuDqz/AA+v7+CzmtdV0iQXkUk0IV5SxWPz8CP0PGB69s0k1/TJ+mNROnai8LTbFkDQklSrDI7gEH4IFfWnUesWMVtHZ6hJCttFLFBtVcxpKcyAHGeT69x6YrSTqjWJ5pJ57qJ5pSDJI9pCWc4AyTs5OAKIAHwzHGUbzGTH+KoBmVvgU66rt47TVIIkwNtrG8n9xz/oCkRfapb1Y08rEbzWrrV9jeJyrpISAFYFR8ij76bxb2WRudx3GlSrI8ZKxswHmYA4FaNcbnL4OD+1Hp6Kq+m5/JF0xaTNY1oWEjH4rLnNJT1hnhENyK0XyVQKWOK0wVGDSvoZdn1ZkZYmr+lVrGZBFRipqaxhhr19+YateXY8s0p2f2Dhf2ApYWBfnsBUyHvWdVIo6TTZFe3tI0uzFbiNhOiOFIfPmOe4xQk302/EbrKx5d1XAJpTH5qOChYCw700reyd6uj5kQMStCuOeKLnACqR6ihGNC5XY/jqumEaVCJr1Vfy+oprrNlHCmY1AFIY3YMcEjHPFEGaVkw0jEexOaynZwWm1emPpUYNTHy9bMBzSehX3QPivquBUEc0jQ+6f//Z',
  },
  {
    name: 'Starfield',
    role: '#3',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/163335/1633350509-1567-jaquette-avant.jpg',
  },
  {
    name: 'Diablo IV',
    role: '#4',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/165511/1655108114-4402-jaquette-avant.jpg',
  },
  {
    name: 'FIFA24',
    role: '#5',
    imageUrl:
      'data:image/jpeg;base64,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',
  },
  {
    name: 'Starfield',
    role: '#6',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/163335/1633350509-1567-jaquette-avant.jpg',
  },
  {
    name: 'Diablo IV',
    role: '#7',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/165511/1655108114-4402-jaquette-avant.jpg',
  },
  {
    name: 'Starfield',
    role: '#8',
    imageUrl:
      'https://image.jeuxvideo.com/medias-sm/163335/1633350509-1567-jaquette-avant.jpg',
  },
  
  
];

export default function Explore() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center gap-x-2">
            Game Of Week
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={2}
  stroke="gold" // Couleur d'or
  className="w-8 h-8 text-violet-600" // Couleur violette pour la note
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
  />
</svg>
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
          </p> */}
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
