<?php
namespace App\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Piece;

class PieceController extends Controller
{

    /**
   * @Route("/piece/", name="piece", methods={"GET"})
   */
  public function getPiece(Request $request)
  {
    $formatted;
      $pieces = $this->get('doctrine.orm.entity_manager')
                   ->getRepository('App:Piece')
                   ->findAll();

      if (empty($pieces))
      {
        return new JsonResponse(['message' => 'No pieces Found'], Response::HTTP_NOT_FOUND);
      }
      $formatted = [];
      foreach ($pieces as $piece) {

        $typePiece = $this->get('doctrine.orm.entity_manager')
                        ->getRepository('App:TypePiece')
                        ->findById($piece->getIdTypePiece());

        $typeVelo = $this->get('doctrine.orm.entity_manager')
                        ->getRepository('App:TypeVelo')
                        ->findById($piece->getIdTypeVelo());

        $formatted[] = [
          'id' => $piece->getId(),
          'titre' => $piece->getTitre(),
          'libelle' => $piece->getLibelle(),
          'quantite' => $piece->getQuantite(),
          'image' => $piece->getImage(),
          'typePiece' => $typePiece[0]->getLibelle(),
          'typeVelo' => $typeVelo[0]->getLibelle(),
        ];
      }
    return new JsonResponse($formatted,Response::HTTP_OK);
  }
}
