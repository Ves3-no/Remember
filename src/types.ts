export type TypeofRemember = "Code"|"Note"

export type Typeof = "All"  | "Search"

export type Remember = {
    Name: string
    Value: string
    Type: TypeofRemember
    Id: number
}