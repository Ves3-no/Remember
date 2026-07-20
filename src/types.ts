export type TypeofRemember = "Code"|"Note"

export type Remember = {
    Name: string
    Value: string
    Type: TypeofRemember
    Id: number
}