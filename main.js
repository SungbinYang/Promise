// // function a(callback) {
// //     setTimeout(() => {
// //         console.log('A');
// //         callback();
// //     }, 1000);
// // }

// function a() {
//     // promise: 약속의 객체가 반환
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('A');
//             resolve('Hello A');
//         }, 1000);
//     });
// }

// function b() {
//     // promise: 약속의 객체가 반환
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('B');
//             resolve('Hello B');
//         }, 1000);
//     });
// }

// function c() {
//     // promise: 약속의 객체가 반환
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('C');
//             resolve('Hello C');
//         }, 1000);
//     });
// }

// function d() {
//     // promise: 약속의 객체가 반환
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log('D');
//             resolve('Hello D');
//         }, 1000);
//     });
// }

// async function test() {
//     const h1 = await a();
//     const h2 = await b();
//     const h3 = await c();
//     const h4 = await d();
//     console.log('Done!');
//     console.log(h1, h2, h3, h4);
// }

// test();

// function a(number) {
//     return new Promise((resolve, reject) => {
//         if (number > 4) {
//             reject();
//             return;
//         }
//         setTimeout(() => {
//             console.log('A');
//             resolve();
//         }, 1000)
//     });
// }

// // 비동기 async, await을 사용할 환경이 안되면 then() 사용할수 있다.
// // 예외처리
// // function test() {
// //     a(7).then(() => {
// //         console.log('Resolve');
// //     }).catch(() => {
// //         console.log('Reject');
// //     }).finally(() => {
// //         console.log('Done!');
// //     });
// // }

// // 또 다른 예외처리
// async function test() {
//     try {
//         await a(8);
//         console.log('Resolve');
//     } catch (error) {
//         console.log('Reject');
//     } finally {
//         console.log('Done!');
//     }
// }

// test();

function fetchMovies(title) {
    // 대기(pending): 이행하거나 거부되지 않은 초기상태.
    const OMDB_API_KEY = '7035c60c1';
    return new Promise(async(resolve, reject) => {
        try {
            const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`);
            // 이행(fulfilled): 연산이 성공적으로 완료됨.
            resolve(res);
        } catch (error) {
            // 거부(rejected): 연산이 실패됨.
            console.log(error.message);
            reject('Sungbin?!');
        }
    });
}

async function test() {
    try {
        const res = await fetchMovies('avengers');
        console.log(res);
    } catch (sungbin) {
        console.log(sungbin);
    }
}

test();

function hello() {
    fetchMovies('frozen').then(res => console.log(res)).catch((sungbin) => {
        console.log(sungbin);
    });
}

hello();