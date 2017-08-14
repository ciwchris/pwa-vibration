port module Main exposing (..)

import Html exposing (Html, button, div, p, text)
import Html.Events exposing (onClick)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


port vibrate : Int -> Cmd msg


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- MODEL


type alias Model =
    { short : Int
    , long : Int
    }


init : ( Model, Cmd Msg )
init =
    ( Model 200 700, Cmd.none )



-- UPDATE


type Msg
    = Short Int
    | Long Int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case Debug.log "message: " msg of
        Short length ->
            ( model, vibrate length )

        Long length ->
            ( model, vibrate length )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick (Short (model.short)) ] [ text "Short" ]
        , p [] []
        , button [ onClick (Long (model.long)) ] [ text "Long" ]
        ]
