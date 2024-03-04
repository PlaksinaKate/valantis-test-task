import {isRouteErrorResponse, useRouteError} from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    console.error(error);

    const getErrorTitle = (code) => {
        switch (code) {
            case 404:
                return 'Страница не найдена';
            default:
                return 'Что-то пошло не так';
        }
    }

    return (
        <div className='center'>
            <div id="error-page">
                <h1>Ошибка!</h1>
                {isRouteErrorResponse(error)
                    ? <>
                        <h2>{getErrorTitle(error.status)}</h2>
                        <p>
                            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
                            {error.data?.message && <p>{error.data.message}</p>}
                        </p>
                    </>
                    : null
                }
            </div>
        </div>
    );


}
