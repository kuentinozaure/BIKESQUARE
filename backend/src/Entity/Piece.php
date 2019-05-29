<?php
namespace  App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\ManyToOne;
use Doctrine\ORM\Mapping\JoinColumn;

/**
 * @ORM\Entity()
 * @ORM\Table(name="PIECE")
 */
class Piece
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $titre;

    /**
     * @ORM\Column(type="string",length=5000)
     */
    protected $libelle;
    /**
     * @ORM\Column(type="float",length=255)
     */
    protected $prix;
    /**
     * @ORM\Column(type="string",length=1000)
     */
    protected $image;

    /**
     * @ORM\Column(type="integer",length=255)
     */
    protected $quantite;

    /**
     * @ManyToOne(targetEntity="TypeVelo")
     * @JoinColumn(name="typeVelo_id", referencedColumnName="id")
     */
    protected $idTypeVelo;

    /**
     * @ManyToOne(targetEntity="TypePiece")
     * @JoinColumn(name="typePiece_id", referencedColumnName="id")
     */
    protected $idTypePiece;

    public function getId()
    {
        return $this->id;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function getLibelle()
    {
        return $this->libelle;
    }
    public function getImage()
    {
        return $this->image;
    }

    public function getQuantite()
    {
        return $this->quantite;
    }

    public function getIdTypeVelo()
    {
      return $this->idTypeVelo;
    }

    public function getIdTypePiece(){
        return $this->idTypePiece;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    public function setTitre($titre)
    {
        $this->titre = $titre;
        return $this;
    }
    public function setLibelle($lbl)
    {
        $this->libelle = $lbl;
        return $this;
    }

    public function setImage($img)
    {
        $this->image = $img;
        return $this;
    }

    public function setQuantite($qte)
    {
        $this->quantite = $qte;
        return $this;
    }
    public function setIdTypeVelo($Idtype)
    {
      $this->idTypeVelo = $Idtype;
      return $this;
    }

    public function setIdTypePiece($Idtype){
        $this->idTypePiece = $Idtype;
        return $this;
    }
}
