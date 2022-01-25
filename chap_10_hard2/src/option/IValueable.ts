export interface IValueable<T> { 
    getOrElse(defaultValue: T)
}