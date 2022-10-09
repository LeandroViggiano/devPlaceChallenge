
void Reemplazar(pila P, int nuevo, int viejo)
{
    pila Q;
    int aux;                                                                               /*Creamos una pila auxiliar para almacenar enteros*/
    Q = CrearPila(sizeof(int)); /*Vamos sacando elementos de P y los vamos metiendo en Q*/ /*excepto en el caso de sacar viejo,que insertamos nuevo*/
    while (!VaciaPila(P))
    {
        Tope(&aux, P);
        if (aux == viejo)
            Push(&nuevo, Q);
        else
            Push(&aux, Q);
        Pop(P);
    } /*ya tenemos en Q el resultado pero al contrario por tanto*/ /*solo resta volcarla de nuevo en P*/
    while (!VaciaPila(Q))
    {
        Tope(&aux, Q);
        Pop(Q);
        Push(&aux, P);
    }
    /*Finalmente liberamos los recursos que fueron reservados*/ /*para la pila auxiliar Q*/
    DestruirPila(Q);
}
