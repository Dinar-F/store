export type AvatarType = {
    id: number,
    image: string,
}

export type AuthProps = {
    closeForm: () => void,
    changeFormType: (type: string) => void,
}

export type UserData = {
    email: string,
    password: string,
    name: string,
    avatar: string,
    role: string,
    id: number,
}

export type AuthValues = Pick<UserData,"email"|"password">
export type UpdateValuesType = Omit<UserData,"role"|"password">
export type RegistrationValues = Omit<UserData,"role"|"id">


export type UserState = {
    showForm: boolean,
    showFormType: string,
    registration: {
        isSuccess: boolean,
        isError: boolean,
    },
    logIn: {
        isAuth: boolean,
        isError: boolean,
        isLoading: boolean,
    }
}

export type ProfileState = {
    currentUser: UserData | null,
    isLoading: boolean,
    isError: boolean,
}
